import React, { useState } from 'react'
import Chatbot from './Chatbot'
import ChatbotWelcomeMessage from './ChatbotWelcomeMessage'
import Counter from './Counter'
import Leaving from './Leaving'
import Office from './Office'
import PatientList from './PatientList'

import './MainModal.css'

const MainModal = ({ patients, timeAppointement, timeAnim, showDoc, anim }) => {
  const [displayChatbot, setDisplayChatbot] = useState(false)
  const [leaving, setLeaving] = useState(false)

  const handleDisplayChatbot = () => setDisplayChatbot(true)
  const showModal = () => setLeaving(true)
  const hideModal = () => setLeaving(false)

  const botAvatarUrl = 'https://via.placeholder.com/60' // Cf exmeple d'integration dans le chatbot: https://github.com/btotharye/cisco-pss-api-chatbot/blob/master/src/App.js
  const userAvatarUrl = 'https://via.placeholder.com/60'

  return (
    <div className='MainModal'>
      <div className='MainModal__title'>
        <div className='MainModal__title__left'>
          <img src={require('../images/logo.png')} alt='waiting_room_logo' />
          <h2 onClick={showDoc}>Virtual Waiting Room</h2>
        </div>
        <div className='MainModal__title__right'>
          <p>Need to be somewhere else ?</p>
          <button onClick={showModal}>Leave</button>
        </div>
      </div>

      <div className='MainModal__container'>
        <div className='MainModal__container__left'>
          <Office timeAppointement={timeAppointement} patient={patients[0]} anim={anim}/>
          <hr />
          <PatientList patients={patients} />
        </div>
        <div className='MainModal__container__right'>
          <Counter patients={patients} timeAppointement={timeAppointement} timeAnim={timeAnim} />
          {displayChatbot ? <Chatbot botAvatarUrl={botAvatarUrl} userAvatarUrl={userAvatarUrl} /> : <ChatbotWelcomeMessage handleDisplayChatbot={handleDisplayChatbot} botAvatarUrl={botAvatarUrl} />}
        </div>
      </div>
      <Leaving leaving={leaving} hide={hideModal} />
    </div>
  )
}

export default MainModal
