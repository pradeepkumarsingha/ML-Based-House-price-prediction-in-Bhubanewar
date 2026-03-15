import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Home, Assessment } from '@mui/icons-material';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black', borderBottom: '1px solid #e0e0e0' }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            onClick={() => navigate('/')}
            sx={{ fontWeight: 800, cursor: 'pointer', color: '#1976d2', display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Home /> BBSR PropAI
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            <Button 
              variant="contained" 
              startIcon={<Assessment />}
              onClick={() => navigate('/predict')}
              sx={{ borderRadius: '10px', textTransform: 'none' }}
            >
              Predictor
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;