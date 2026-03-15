import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load saved objects
model = pickle.load(open("regmodel.pkl", "rb"))
scaler = pickle.load(open("scaling.pkl", "rb"))
model_columns = pickle.load(open("columns.pkl", "rb"))

@app.route("/")
def home():
    return "Bhubaneswar House Price Prediction API is running"

@app.route("/predict_api", methods=["POST"])
def predict_api():

    data = request.json

    # Convert input to dataframe
    df = pd.DataFrame([data])

    # One Hot Encoding
    df = pd.get_dummies(df)

    # Match training columns
    df = df.reindex(columns=model_columns, fill_value=0)

    # Scaling
    scaled_data = scaler.transform(df)

    # Prediction
    prediction = model.predict(scaled_data)

    return jsonify({
        "predicted_price": float(prediction[0])
    })


if __name__ == "__main__":
    app.run(debug=True)