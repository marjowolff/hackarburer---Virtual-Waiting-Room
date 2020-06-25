import React, { useState, useEffect } from 'react'

import MainModal from './MainModal'
import DocInterface from './DocInterface'
import initialPatientsData from './PatientsData'

import './VirtualWaitingRoom.css'


const VirtualWaitingRoom = () => {
  const [patients, setPatients] = useState(initialPatientsData)
  const [timeAppointement, setTimeAppointement] = useState(0)
  const [anim, setAnim] = useState(false)
  const [docInterface, setDocInterface] = useState(false)
  const [timeAnim, setTimeAnim] = useState(false)

  const handleClick = () => {
    //remove patient #1
    const tempPatients = [...patients].slice(1)
    setPatients(tempPatients)
    //setTimeAppointement to 0
    setAnim(true)
    setTimeout(() => setAnim(false), 3000)
  }

  // useEffect(() => {setInterval(() => {setTimeAppointement(timeAppointement + 1)}, 3000)}, [timeAppointement])
  //   setTimeAppointement(0)


  const showDocInterface = () => {
    setDocInterface(true)
  }

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTimeAppointement(timeAppointement => timeAppointement + 1)
      setTimeAnim(true)
      setTimeout(() => setTimeAnim(false), 2000)
    }, 3000);
    return () => clearInterval(interval);
  }, [timeAppointement]);

  console.log(initialPatientsData)
  return (
    
    <div className='VirtualWaitingRoom'>
      <MainModal patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} showDoc={showDocInterface} anim={anim} />
      <DocInterface patients={patients} newPatient={handleClick} docInterface={docInterface} />
    </div>
  );
}

export default VirtualWaitingRoom;
