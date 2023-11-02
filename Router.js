import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { app } from './firebase'; // Firebase bağlantısını içe aktarın
import Home from './components/Home';

import Dashboard from './components/Dashboard'; // Sayfaları içe aktar

import { AuthProvider } from './contexts/AuthContext'; // AuthProvider'ı içe aktarın

function App() {
  return (
    <AuthProvider> {/* AuthProvider'ı uygulamanın en üst düzey bileşeni olarak sarmalayın */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} /> // rota sağla
     
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
