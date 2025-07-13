import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = '84821';

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('848labs-authenticated');
    if (isAuthenticated === 'true') {
      onAuthenticated();
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading time for better UX
    setTimeout(() => {
      if (password === correctPassword) {
        localStorage.setItem('848labs-authenticated', 'true');
        onAuthenticated();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 group hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">Access Protected</h1>
            <p className="text-gray-600">Enter the password to view 848Labs</p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-12 py-4 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-300"
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm animate-fadeInUp">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group hover:shadow-lg active:scale-95 relative overflow-hidden"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Access Website</span>
                  <Lock className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Authorized personnel only
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            © 2024 848Labs. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;