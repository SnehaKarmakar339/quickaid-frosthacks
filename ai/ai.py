import torch
import torch.nn as nn
import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sentence_transformers import SentenceTransformer, util
import json
from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline
from symspellpy import SymSpell, Verbosity

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

class DiseaseClassifier(nn.Module):
    def __init__(self, input_size, num_classes, dropout_rate=0.35665610394511454):
        super(DiseaseClassifier, self).__init__()
        self.fc1 = nn.Linear(input_size, 382)
        self.fc2 = nn.Linear(382, 389)
        self.fc3 = nn.Linear(389, 433)
        self.fc4 = nn.Linear(433, num_classes)
        self.activation = nn.LeakyReLU()
        self.dropout = nn.Dropout(dropout_rate)

    def forward(self, x):
        x = self.activation(self.fc1(x))
        x = self.dropout(x)
        x = self.activation(self.fc2(x))
        x = self.dropout(x)
        x = self.activation(self.fc3(x))
        x = self.dropout(x)
        x = self.fc4(x)  # Logits
        return x


class DiseasePredictionModel:
    def __init__(self, ai_model_name="model.pth", data_file="data.csv", symptom_json="symptoms.json", dictionary_file="frequency_dictionary_en_82_765.txt"):
        # Load dataset (for feature names)
        self.df = pd.read_csv(data_file)

        # Extract feature names
        self.symptom_columns = self.df.columns[1:]  # Skip disease column

        # Load label encoder (used during training)
        self.label_encoder = LabelEncoder()
        self.label_encoder.fit(self.df.iloc[:, 0])  # Fit on disease names

        # Load feature scaler (used during training)
        self.scaler = StandardScaler()
        self.scaler.fit(self.df.iloc[:, 1:].values)  # Fit on symptoms data

        # Define the trained model architecture
        self.input_size = len(self.symptom_columns)
        self.num_classes = len(self.label_encoder.classes_)
        self.model = self._load_model(ai_model_name)

        # Load symptom list from JSON
        self.SYMPTOM_LIST = self.load_symptoms(symptom_json)

        # Initialize SymSpell for spelling correction
        self.sym_spell = SymSpell(max_dictionary_edit_distance=2, prefix_length=7)
        self.sym_spell.load_dictionary(dictionary_file, term_index=0, count_index=1)

        # Load BioBERT model for medical NER
        nlp_model_name = "alvaroalon2/biobert_diseases_ner"
        self.tokenizer = AutoTokenizer.from_pretrained(nlp_model_name)
        self.nlp_model = AutoModelForTokenClassification.from_pretrained(nlp_model_name)
        self.ner_pipeline = pipeline("ner", model=self.nlp_model, tokenizer=self.tokenizer, aggregation_strategy="simple")

        # Initialize Sentence-BERT model for semantic similarity
        self.semantic_model = SentenceTransformer('all-MiniLM-L6-v2')

    def _load_model(self, ai_model_name):
        """Loads the trained disease classification model."""
        model = DiseaseClassifier(self.input_size, self.num_classes).to(device)
        model.load_state_dict(torch.load(ai_model_name, map_location=device, weights_only=True))
        model.eval()
        return model

    def predict_disease(self, symptoms):
        """Predicts the disease based on input symptoms."""
        input_vector = np.zeros(len(self.symptom_columns))
        for symptom in symptoms:
            if symptom in self.symptom_columns:
                input_vector[list(self.symptom_columns).index(symptom)] = 1

        # Normalize input
        input_vector = self.scaler.transform([input_vector])

        # Convert to tensor
        input_tensor = torch.tensor(input_vector, dtype=torch.float32).to(device)

        # Get model prediction
        with torch.no_grad():
            outputs = self.model(input_tensor)
            _, predicted_class = torch.max(outputs, 1)

        # Convert prediction to disease name
        predicted_disease = self.label_encoder.inverse_transform([predicted_class.cpu().numpy()[0]])[0]
        return predicted_disease

    def load_symptoms(self, json_file):
        """Loads symptom names from a JSON file."""
        with open(json_file, "r", encoding="utf-8") as f:
            return json.load(f)

    def correct_text(self, text):
        """Fix grammar & spelling using SymSpell for better domain-specific accuracy."""
        words = text.split()
        corrected_words = []

        for word in words:
            # Check if the word is a symptom in the symptom list
            if word.lower() in [symptom.lower() for symptom in self.SYMPTOM_LIST]:
                corrected_words.append(word)  # Keep the symptom as is
            else:
                # Correct non-symptom words using SymSpell
                suggestions = self.sym_spell.lookup(word, Verbosity.CLOSEST, max_edit_distance=2)
                if suggestions:
                    corrected_words.append(suggestions[0].term)  # Pick the closest match
                else:
                    corrected_words.append(word)  # Keep the word if no correction is found
        return ' '.join(corrected_words)

    def extract_symptoms(self, text):
        """Extract symptoms from text using fine-tuned BioBERT."""
        ner_results = self.ner_pipeline(text)
        symptoms = set()
        for entity in ner_results:
            if entity["entity_group"] == "DISEASE":  # Uses the grouped entity
                symptoms.add(entity["word"].lower())  # Convert to lowercase for matching
        return list(symptoms)

    def match_symptoms(self, extracted_symptoms):
        """Match extracted symptoms with the nearest valid symptom using semantic similarity."""
        matched = {}

        # Generate embeddings for the symptom list
        symptom_embeddings = self.semantic_model.encode(self.SYMPTOM_LIST, convert_to_tensor=True)

        for symptom in extracted_symptoms:
            # Generate the embedding for the extracted symptom
            symptom_embedding = self.semantic_model.encode(symptom, convert_to_tensor=True)

            # Compute cosine similarity between the extracted symptom and the symptom list
            similarities = util.pytorch_cos_sim(symptom_embedding, symptom_embeddings)[0]

            # Find the most similar symptom
            most_similar_idx = similarities.argmax()
            best_match = self.SYMPTOM_LIST[most_similar_idx]
            matched[symptom] = best_match

        return matched.values()


