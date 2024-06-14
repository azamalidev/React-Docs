// src/App.js
import React from 'react';
import ReduxPage from './pages/Redux';
import Headers from './layout/Header';
import Footer from './layout/Header';
import UseStatePage from './pages/useState'
import UseReducerPage from './pages/useReducer'

const App = () => {
  return (
    <div>
      <Headers />
      {/* <ReduxPage /> */}
      {/* <UseStatePage/> */}
      <UseReducerPage/>
      <Footer />
    </div>
  );
};

export default App;
