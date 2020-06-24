import React from 'react';
import Chatbot from './Chatbot';
import Counter from './Counter'
import Office from './Office';
import PatientList from './PatientList';

import './MainModal.css'

const MainModal = ({patients, timeAppointement}) => {
  return (
    <div className="MainModal">
      <div className="MainModal_title">
        <div className='MainModal_title_left'>
          <img src={require('../images/logo.png')} alt='waiting_room_logo'/>
          <h2>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal_title_right'>
          <button>Leave</button>
        </div>
      </div>
      <div className='MainModal_container'>
        <div className='MainModal_container_left'>
          <Office timeAppointement={timeAppointement} patient={patients[0]} />
          <PatientList patients={patients}/>
      </div>
      <div className='MainModal_container_right'>
        <Counter patients={patients}/>
        <Chatbot />
        
      </div>
      </div>
    </div>
  )
}

export default MainModal;
