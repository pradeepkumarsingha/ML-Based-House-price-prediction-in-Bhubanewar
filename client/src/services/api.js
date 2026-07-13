// import axios from "axios";

// const API = axios.create({
//   // baseURL: "http://localhost:8000/api/houses"
//   baseURL: import.meta.env.VITE_API_URL
// });

// export const getPrediction = (data) => API.post("/predict", data);


import axios from "axios";

const API = axios.create({
  baseURL: "https://ml-based-house-price-prediction-in-i0l9.onrender.com/api"
});

export const getPrediction = (data) => {
  return API.post("/houses/predict", data);
};