import React, { useState } from 'react'
import Chatbot from '../Chatbot/Chatbot'
import ChatbotWelcomeMessage from '../Chatbot/ChatbotWelcomeMessage'
import Counter from './Counter'
import Leaving from './Leaving'
import Office from './Office'
import PatientList from './PatientList'

import './MainModal.css'

const MainModal = ({ patients, timeAppointement, timeAnim, showDoc, time, nbrBefore, anim }) => {
  const [displayChatbot, setDisplayChatbot] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [veil, setVeil] =useState(true)

  const handleDisplayChatbot = () => {
    setDisplayChatbot(true)
    setVeil(false)
  }
  const showModal = () => setLeaving(true)
  const hideModal = () => setLeaving(false)

  const botAvatarUrl = require('../../images/chatbot.png')
  const userAvatarUrl = require('../../images/6.png')

  return (
    <div className='MainModal'>
      <div className='MainModal__veil' style={veil ?{display:'block'}:{display:'none'}}></div>
      <div className='MainModal__title'>
        <div className='MainModal__title__left'>
          <img src={require('../../images/logo.png')} alt='waiting_room_logo' />
          <h2 onClick={showDoc}>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal__title__right'>
          <p>Can't attend the appointment ?</p>
          <button onClick={showModal}>Leave</button>
        </div>
      </div>

      <div className='MainModal__container'>
        <div className='MainModal__container__left'>
          <Office timeAppointement={timeAppointement} patient={patients[0]} anim={anim} />
          <hr />
          <PatientList patients={patients} />
        </div>
        
        <div className='MainModal__container__right'>
          <Counter time={time} nbrBefore={nbrBefore} timeAnim={timeAnim} />
          {displayChatbot
            ? <Chatbot botAvatarUrl={botAvatarUrl} userAvatarUrl={userAvatarUrl} />
            : <ChatbotWelcomeMessage handleDisplayChatbot={handleDisplayChatbot} botAvatarUrl={botAvatarUrl} />
          }
        </div>
      </div>
      <Leaving leaving={leaving} hide={hideModal} />
    </div>
  )
}

export default MainModal
