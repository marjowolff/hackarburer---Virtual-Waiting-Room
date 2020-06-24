import React, { useState, useEffect } from 'react';

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
  const [timeAppointement, setTimeAppointement] = useState(0)

  useEffect(() => {setInterval(() => {setTimeAppointement(timeAppointement + 1)}, 6000)}, [timeAppointement])

  return (
    <div className="App">
      <Navbar />
      <MainModal patients={patients} timeAppointement={timeAppointement} />
      <button>Flip Move</button>
    </div>
  );
}

export default App;
