// src/App.js
import React from 'react';
import ReduxPage from './pages/Redux';
import Headers from './layout/Header';
import Footer from './layout/Footer';
import UseStatePage from './pages/useState';
import UseReducerPage from './pages/useReducer';
import UseFfect from './pages/useEffect'
import UseMemo from './pages/useMemo';
import { Route, Routes } from 'react-router-dom';
import UseCallBack from './pages/useCallBack'
import Hooks from './pages/hook'
const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
      <Route
          path='/'
          element={<Hooks />}
        />
        <Route
          path='/useState'
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
         <Route
          path='/usememo'
          element={<UseMemo />}
        />
         <Route
          path='/usecallback'
          element={<UseCallBack />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
