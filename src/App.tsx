import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Stack from './pages/Stack';
import Clients from './pages/Clients';
import CaseStudyDetail from './pages/CaseStudyDetail';
import AINativePlatforms from './pages/services/AINativePlatforms';
import EdgeSystems from './pages/services/EdgeSystems';
import EnterpriseSolutions from './pages/services/EnterpriseSolutions';
import DataAIEngineering from './pages/services/DataAIEngineering';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/services/ai-native-platforms" element={<AINativePlatforms />} />
          <Route path="/services/edge-systems" element={<EdgeSystems />} />
          <Route path="/services/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/services/data-ai-engineering" element={<DataAIEngineering />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;