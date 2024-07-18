import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import NumpyNeuralNetwork from './pages/NumpyNeuralNetwork'
import Home from './pages/Home';

import './App.css';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/numpy-neural-network" element={<NumpyNeuralNetwork />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
