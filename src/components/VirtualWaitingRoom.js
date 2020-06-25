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
    setAnim(true)
    setTimeout(() => setAnim(false), 3000)
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
      setTimeout(() => setTimeAnim(false), 2000)
    }, 3000);
    return () => clearInterval(interval);
  }, [timeAppointement]);

  useEffect(() => {
    if (newTime > 0) {
      let globalDelay = newTime - (timeBase * (nbrBefore + 1))
      return setNewTime(timeBase * nbrBefore + globalDelay)
    } else {
      return setNewTime(timeBase * nbrBefore)
    }
  }, [nbrBefore])

  return (
    
    <div className='VirtualWaitingRoom'>
      <MainModal patients={patients} timeAppointement={timeAppointement} delay={delay} timeAnim={timeAnim} showDoc={showDocInterface} anim={anim} nbrBefore={nbrBefore} time={newTime - timeAppointement}/>
      <DocInterface patients={patients} newPatient={handleClick} docInterface={docInterface} getValue={getValue} getDelay={getDelay} delay={delay} />
    </div>
  );
}

export default VirtualWaitingRoom;
