import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordProtection from './components/PasswordProtection';
import Header from './components/Header';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Stack from './pages/Stack';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on app load
    const authStatus = localStorage.getItem('848labs-authenticated');
    setIsAuthenticated(authStatus === 'true');
    setIsLoading(false);
  }, []);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  // Show loading state briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />;
  }

  // Show main app if authenticated
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;