import React, { useState } from 'react';

import Chatbot from './Chatbot';
import Counter from './Counter'
import Leaving from './Leaving';
import Office from './Office';
import PatientList from './PatientList';

import './MainModal.css'

const MainModal = ({patients, timeAppointement, showDoc}) => {
  const[leaving, setLeaving] = useState(false)

  const showModal = () => {
    setLeaving(true)
  }
  const hideModal = () => {
    setLeaving(false)
  }
  return (
    <div className="MainModal">
      <div className="MainModal__title">
        <div className='MainModal__title__left'>
          <img src={require('../images/logo.png')} alt='waiting_room_logo'/>
          <h2 onClick={showDoc}>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal__title__right'>
          <p>Need to be somewhere else ?</p>
          <button onClick={showModal}>Leave</button>
        </div>
      </div>

      <div className='MainModal__container'>
        <div className='MainModal__container__left'>
          <Office timeAppointement={timeAppointement} patient={patients[0]} />
          <PatientList patients={patients}/>
      </div>
      <div className='MainModal__container__right'>
        <Counter patients={patients}/>
        <div className="MainModal__chatbot">
        <Chatbot />
        </div>
      </div>
      </div>
      <Leaving leaving={leaving} hide={hideModal}/>
    </div>
  )
}

export default MainModal;
