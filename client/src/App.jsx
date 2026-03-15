import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Predict from './pages/Predict';
import { CssBaseline } from '@mui/material';
import Header from './pages/Headerq';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      {/* CssBaseline helps normalize styles across browsers for MUI */}
      <CssBaseline /> 
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;