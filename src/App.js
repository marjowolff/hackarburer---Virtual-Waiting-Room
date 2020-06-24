import React, { useState, useEffect } from 'react';

import MainModal from './components/MainModal';
import Navbar from './components/Navbar';

import './App.css';
import DocInterface from './components/DocInterface';

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
  const [docInterface, setDocInterface] = useState(false)
  const [timeAnim, setTimeAnim] = useState(false)

  const handleClick = () => {
    //remove patient #1
    const tempPatients = [...patients].slice(1)
    setPatients(tempPatients)
    //setTimeAppointement to 0
    setTimeAppointement(0)
  }

  const showDocInterface = () => {
    setDocInterface(true)
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
      <div className='App__container'>
        <MainModal patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} showDoc={showDocInterface}/>
        <DocInterface patients={patients} newPatient={handleClick} docInterface={docInterface} />
      </div>
    </div>
  );
}

export default App;
