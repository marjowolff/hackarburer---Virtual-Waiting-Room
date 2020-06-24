import React, { useState } from 'react';

import Counter from './Counter';
import Leaving from './Leaving';
import PatientList from './PatientList';

import './MainModal.css'

const MainModal = ({patients}) => {
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
          <h2>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal__title__right'>
          <p>Need to be somewhere else ?</p>
          <button onClick={showModal}>Leave</button>
        </div>
      </div>
      <div className='MainModal__container'>
      <Counter />
      <PatientList patients={patients}/>
      </div>
      <Leaving leaving={leaving} hide={hideModal}/>
    </div>
  );
}

export default MainModal;
