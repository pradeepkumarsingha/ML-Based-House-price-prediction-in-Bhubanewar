import axios from 'axios';

// const API = axios.create({
//     baseURL: import.meta.env.VITE_API_URL
// });
const API="https://your-app-name.onrender.com/predict"

export const getPrediction = (data) => API.post('/houses/predict', data);