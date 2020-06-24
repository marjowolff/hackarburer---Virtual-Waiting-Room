import React, { useState } from 'react';

import MainModal from './components/MainModal';
import Navbar from './components/Navbar';

import './App.css';

const initialPatientsData = [
  {
    id:1,
    name: 'Patient A',
    status:'other'
  },
  {
    id:2,
    name: 'Patient B',
    status:'other'
  },
  {
    id:3,
    name: 'You',
    status:'you'
  },
  {
    id:4,
    name: 'Patient D',
    status:'other'
  }
]

const App = () => {
  const [patients, setPatients] = useState(initialPatientsData)

  return (
    <div className="App">
      <Navbar />
      <MainModal patients={patients} />
      <button>Flip Move</button>
    </div>
  );
}

export default App;
