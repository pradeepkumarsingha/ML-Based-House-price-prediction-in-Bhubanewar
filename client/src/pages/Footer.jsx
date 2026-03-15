import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider } from '@mui/material';
import { Facebook, LinkedIn, Twitter, GitHub, Mail } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1a2027', color: 'white', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>BBSR PropAI</Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
              Empowering Bhubaneswar homeowners with real-time AI valuations and market insights since 2025.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" size="small"><Facebook /></IconButton>
              <IconButton color="inherit" size="small"><Twitter /></IconButton>
              <IconButton color="inherit" size="small"><LinkedIn /></IconButton>
              <IconButton color="inherit" size="small"><GitHub /></IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Platform</Typography>
            <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
            <Link href="/predict" color="inherit" underline="hover" display="block">Predictor</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Market Trends</Link>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Company</Typography>
            <Link href="#" color="inherit" underline="hover" display="block">About Us</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" display="block">Terms</Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Contact</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Mail fontSize="small" />
              <Typography variant="body2">support@bbsrpropai.com</Typography>
            </Stack>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
              Bhubaneswar, Odisha, India
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
        
        <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
          © 2026 BBSR PropAI. Built for GIFT Autonomous Bhubaneswar.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;