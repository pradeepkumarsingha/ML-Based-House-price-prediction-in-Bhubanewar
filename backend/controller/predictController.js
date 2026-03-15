const axios = require("axios");

exports.getHousePrediction = async (req, res) => {
  try {
    const { location, area_sqft, bhk, bathroom, parking, furnishing, price_per_sqft } = req.body;

    // Send data to Flask ML API
    const mlResponse = await axios.post(process.env.ML_SERVICE_URL, {
      location: location,
      area_sqft: area_sqft,
      bhk: bhk,
      bathroom: bathroom,
      parking: parking,
      furnishing: furnishing,
      price_per_sqft: price_per_sqft
    });

    const predictedPrice = mlResponse.data.predicted_price;

    res.status(200).json({
      success: true,
      prediction: predictedPrice,
      location_name: location
    });

  } catch (error) {
    console.error("ML Service Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: "Failed to connect to ML Prediction engine"
    });
  }
};