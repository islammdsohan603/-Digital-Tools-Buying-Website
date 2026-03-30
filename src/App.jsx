import './App.css';

import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Stats from './component/Stats';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Stats />
    </div>
  );
};

export default App;
