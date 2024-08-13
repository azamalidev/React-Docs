// src/App.js
import React from 'react';
import ReduxPage from './pages/Redux';
import Headers from './layout/Header';
import Footer from './layout/Footer';
import UseStatePage from './pages/useState';
import UseReducerPage from './pages/useReducer';
import UseFfect from './pages/useEffect'
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route
          path='/'
          element={<UseStatePage />}
        />
         <Route
          path='/useffect'
          element={<UseFfect />}
        />
        <Route
          path='/redux'
          element={<ReduxPage />}
        />
        <Route
          path='/usereduce'
          element={<UseReducerPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
