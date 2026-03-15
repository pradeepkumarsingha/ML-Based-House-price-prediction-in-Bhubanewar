const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const predictRoutes = require('./routes/predict_Routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/houses', predictRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Node server running on port ${PORT}`));