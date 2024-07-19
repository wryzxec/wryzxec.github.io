import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NumpyNeuralNetwork from './pages/NumpyNeuralNetwork';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/numpy-neural-network" element={<NumpyNeuralNetwork />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
