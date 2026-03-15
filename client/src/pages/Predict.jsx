import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, MenuItem, Button, Grid, Box, CircularProgress } from '@mui/material';
import { getPrediction } from '../services/api';

const Predict = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({
    location: 'Patia', // Removed 'Select' to avoid ML errors
    area_sqft: '',
    bhk: '',
    bathroom: '',
    parking: '',
    furnishing: 'Unfurnished', // Removed 'Select'
    price_per_sqft: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null); 
    
    try {
      const response = await getPrediction(formData);
      console.log("API Response:", response.data); 

      // FIXED: Look for 'prediction' as per your console log
      if (response.data && response.data.prediction !== undefined) {
          // Using Math.abs for now because your model is returning negative values
          const formattedPrice = Math.abs(response.data.prediction).toFixed(2);
          setResult(formattedPrice); 
      } else {
          console.error("Prediction key not found in response!", response.data);
          alert("Error: Prediction data missing from server response.");
      }
    } catch (err) {
      console.error("API Error:", err);
      alert("Backend server is not responding.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 5 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Bhubaneswar House Price Predictor
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Location */}
            <Grid item xs={12}>
              <TextField select fullWidth label="Location" name="location" value={formData.location} onChange={handleChange}>
                {['Patia', 'Nayapalli', 'Khandagiri', 'Old Town', 'Rasulgarh'].map(loc => (
                  <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Area & BHK */}
            <Grid item xs={6}>
              <TextField fullWidth label="Area (Sqft)" name="area_sqft" type="number" required onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="BHK" name="bhk" type="number" required onChange={handleChange} />
            </Grid>

            {/* Bathroom & Parking */}
            <Grid item xs={6}>
              <TextField fullWidth label="Bathrooms" name="bathroom" type="number" required onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Parking Spaces" name="parking" type="number" required onChange={handleChange} />
            </Grid>

            {/* Furnishing & Price/Sqft */}
            <Grid item xs={6}>
              <TextField select fullWidth label="Furnishing" name="furnishing" value={formData.furnishing} onChange={handleChange}>
                {['Unfurnished', 'Semi-Furnished', 'Fully-Furnished'].map(f => (
                  <MenuItem key={f} value={f}>{f}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Price Per Sqft" name="price_per_sqft" type="number" required onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
              <Button 
                type="submit" 
                variant="contained" 
                fullWidth 
                size="large" 
                disabled={loading}
                sx={{ py: 2, fontWeight: 'bold' }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Calculate Price"}
              </Button>
            </Grid>
          </Grid>
        </form>

        {result !== null && (
          <Box sx={{ mt: 4, p: 3, bgcolor: '#e8f5e9', borderRadius: 3, textAlign: 'center', border: '1px solid #c8e6c9' }}>
            <Typography variant="h6" color="success.dark">Estimated Market Price</Typography>
            <Typography variant="h3" color="success.main" fontWeight="bold">₹{result} Lakhs</Typography>
            {/* Note about negative values */}
            <Typography variant="caption" color="error">
              Note: Model returned a negative value. Accuracy may be low.
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Predict;