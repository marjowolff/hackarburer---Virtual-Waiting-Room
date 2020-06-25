import React, { useState, useEffect, useCallback } from 'react';

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
  const [delay, setDelay] = useState(0)
  const [newTime, setNewTime] = useState(0)

  const timeBase = 15

  const idMe = patients.findIndex(patient => patient.status === 'you')
  const nbrBefore = patients.slice(0, idMe).length

  const handleClick = () => {
    //remove patient #1
    const tempPatients = [...patients].slice(1)
    setPatients(tempPatients)
    //setTimeAppointement to 0
    setTimeAppointement(0)
  }

  const getValue = e => {
    setDelay(parseInt(e.target.value))
}

  const getDelay = () => {
    setNewTime(newTime + delay)
    setDelay(0)
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

  useEffect(() => setNewTime(timeBase * nbrBefore ), [nbrBefore])

  return (
    <div className="App">
      <Navbar />
      <div className='App__container'>
        <MainModal patients={patients} timeAppointement={timeAppointement} delay={delay} timeAnim={timeAnim} showDoc={showDocInterface} nbrBefore={nbrBefore} time={newTime - timeAppointement}/>
        <DocInterface patients={patients} newPatient={handleClick} docInterface={docInterface} getValue={getValue} getDelay={getDelay} delay={delay} />
      </div>
    </div>
  );
}

export default App;
