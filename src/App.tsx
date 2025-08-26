import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Stack from './pages/Stack';
import AINativePlatforms from './pages/services/AINativePlatforms';
import EdgeSystems from './pages/services/EdgeSystems';
import EnterpriseSolutions from './pages/services/EnterpriseSolutions';
import DataAIEngineering from './pages/services/DataAIEngineering';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/services/ai-native-platforms" element={<AINativePlatforms />} />
          <Route path="/services/edge-systems" element={<EdgeSystems />} />
          <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/services/data-ai-engineering" element={<DataAIEngineering />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;