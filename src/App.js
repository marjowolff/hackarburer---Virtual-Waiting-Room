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
    name: 'Patient C',
    status:'other'
  },
  {
    id:4,
    name: 'You',
    status:'you'
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
  const [timeAnim, setTimeAnim] = useState(false)

  const handleClick = () => {
    //remove patient #1
    const tempPatients = [...patients].slice(1)
    setPatients(tempPatients)
    //setTimeAppointement to 0
    setTimeAppointement(0)
  }

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTimeAppointement(timeAppointement => timeAppointement + 1)
      setTimeAnim(true)
      setTimeout(()=> setTimeAnim(false), 2000)
      }, 3000);
    return () => clearInterval(interval);
  }, [timeAppointement]);

  return (
    <div className="App">
      <Navbar />
      <MainModal patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} />
      <button onClick={handleClick}>Take a new patient</button>
    </div>
  );
}

export default App;
