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
  },
  {
    id:5,
    name: 'Patient E',
    status:'other'
  },
  {
    id:6,
    name: 'Patient F',
    status:'other'
  },
  {
    id:7,
    name: 'Patient G',
    status:'other'
  },
  {
    id:8,
    name: 'Patient H',
    status:'other'
  }
]

const App = () => {
  const [patients, setPatients] = useState(initialPatientsData)
  const [timeAppointement, setTimeAppointement] = useState(0)

  const handleClick = () => {
    //remove patient #1
    const tempPatients = [...patients].slice(1)
    setPatients(tempPatients)
    //every id -1


  }

  useEffect(() => {setInterval(() => {setTimeAppointement(timeAppointement + 1)}, 60000)}, [timeAppointement])

  return (
    <div className="App">
      <Navbar />
      <MainModal patients={patients} timeAppointement={timeAppointement} />
      <button onClick={handleClick}>Take a new patient</button>
    </div>
  );
}

export default App;
