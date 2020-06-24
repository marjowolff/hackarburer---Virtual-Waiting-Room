import React from 'react';

import MainModal from './components/MainModal';
import Navbar from './components/Navbar';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainModal />
    </div>
  );
}

export default App;
