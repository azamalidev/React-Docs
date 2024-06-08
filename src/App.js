// src/App.js
import React from 'react';
import Redux from './pages/redux';
import Headers from './layout/Header';
import Footer from './layout/Header';

const App = () => {
  return (
    <div>
      <Headers />
      <Redux />
      <Footer />
    </div>
  );
};

export default App;
