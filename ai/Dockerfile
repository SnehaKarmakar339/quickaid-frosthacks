FROM python:3.11-slim

WORKDIR /app

RUN pip install torch pandas scikit-learn sentence-transformers transformers symspellpy flask

COPY . .

ENV PORT=5000

EXPOSE ${PORT}

CMD ["python", "app.py"]