import React from 'react';
import { useNavigate } from 'react-router-dom';
// 🟢 Add Grid and Divider here:
import { Box, Button, Container, Typography, Stack, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Search, TrendingUp, ShutterSpeed } from '@mui/icons-material';
const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* Left Side: Animated Text */}
          <Grid item xs={12} md={7}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" sx={{ color: 'white', fontWeight: 900, mb: 2, fontSize: { xs: '3rem', md: '5rem' } }}>
                Your Home, <br />
                <span style={{ color: '#4cc9f0' }}>Digitized.</span>
              </Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, fontWeight: 300 }}>
                Bhubaneswar's first AI-powered property valuer. Get an accurate market price in under 3 seconds.
              </Typography>
              
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" size="large" onClick={() => navigate('/predict')}
                  sx={{ bgcolor: '#4cc9f0', color: '#000', px: 5, py: 2, borderRadius: '50px', fontWeight: 'bold', '&:hover': { bgcolor: '#fff' } }}
                >
                  Start Prediction
                </Button>
                <Button 
                  variant="outlined" size="large" 
                  sx={{ color: '#fff', borderColor: '#fff', px: 5, borderRadius: '50px', backdropFilter: 'blur(5px)' }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Side: Interactive "Quick Stats" Card */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Paper sx={{ p: 4, borderRadius: 8, background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>Market Pulse</Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2">🔥 Trending: Patia</Typography>
                    <Typography variant="body2" sx={{ color: '#4cc9f0' }}>+4.2%</Typography>
                  </Box>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2">📍 Locations Covered</Typography>
                    <Typography variant="body2" fontWeight="bold">15 Major Areas</Typography>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Home;