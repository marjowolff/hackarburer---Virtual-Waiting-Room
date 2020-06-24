import React, { useState } from 'react';
import Chatbot from './Chatbot';
import ChatbotWelcomeMessage from './ChatbotWelcomeMessage'
import Counter from './Counter'
import Leaving from './Leaving';
import Office from './Office';
import PatientList from './PatientList';

import './MainModal.css'

const MainModal = ({ patients, timeAppointement, timeAnim, showDoc }) => {
  const [displayChatbot, setDisplayChatbot] = useState(false)
  const[leaving, setLeaving] = useState(false)
  
  const handleDisplayChatbot = () => setDisplayChatbot(true)
  
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
          <PatientList patients={patients} />
        </div>
        <div className='MainModal_container_right'>
          <Counter patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} />
          {displayChatbot ? <Chatbot /> : <ChatbotWelcomeMessage handleDisplayChatbot={handleDisplayChatbot} />}
        </div>
      </div>
      <Leaving leaving={leaving} hide={hideModal}/>
    </div>
  )
}

export default MainModal
