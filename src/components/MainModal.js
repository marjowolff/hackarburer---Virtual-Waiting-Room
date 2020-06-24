import React, { useState } from 'react'
import Chatbot from './Chatbot'
import Counter from './Counter'
import Office from './Office'
import PatientList from './PatientList'

import './MainModal.css'
import ChatbotWelcomeMessage from './ChatbotWelcomeMessage'

const MainModal = ({ patients, timeAppointement, timeAnim }) => {
  const [displayChatbot, setDisplayChatbot] = useState(false)

  const handleDisplayChatbot = () => setDisplayChatbot(true)

  return (
    <div className='MainModal'>
      <div className='MainModal_title'>
        <div className='MainModal_title_left'>
          <img src={require('../images/logo.png')} alt='waiting_room_logo' />
          <h2>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal_title_right'>
          <button>Leave</button>
        </div>
      </div>
      <div className='MainModal_container'>
        <div className='MainModal_container_left'>
          <Office timeAppointement={timeAppointement} patient={patients[0]} />
          <PatientList patients={patients} />
        </div>
        <div className='MainModal_container_right'>
          <Counter patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} />
          {displayChatbot ? <Chatbot /> : <ChatbotWelcomeMessage handleDisplayChatbot={handleDisplayChatbot} />}
        </div>
      </div>
    </div>
  )
}

export default MainModal
