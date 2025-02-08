from ai import DiseasePredictionModel
from flask import Flask, request, jsonify

app = Flask(__name__)

model = DiseasePredictionModel()

@app.route("/ai/text", methods=["POST"])
def ai_text():
    try:
        text = request.json["prompt"]
        print(f"Original text: {text}")
        corrected_text = model.correct_text(text)
        print(f"Corrected text: {corrected_text}")
        extracted_symptoms = model.extract_symptoms(corrected_text)
        print(f"Extracted symptoms: {extracted_symptoms}")
        matched_symptoms = model.match_symptoms(extracted_symptoms)
        print(f"Matched symptoms: {matched_symptoms}")
        predicted_disease = model.predict_disease(matched_symptoms)
        return jsonify({"disease": predicted_disease})
    except:
        return 400
    

@app.route("/ai/list", methods=["POST"])
def ai_list():
    body = request.get_json()
    try:
        data = body["symptoms"]
        print(data)
        out = model.predict_disease(data)
        return jsonify({"output":out}),200    
    except:
        return jsonify({"status": "error"}),400
    
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")