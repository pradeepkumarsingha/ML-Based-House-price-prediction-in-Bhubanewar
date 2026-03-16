import axios from "axios";

const API = axios.create({
  baseURL: "https://ml-based-house-price-prediction-in-k84h.onrender.com"
});

export const getPrediction = (data) => API.post("houses/predict", data);
