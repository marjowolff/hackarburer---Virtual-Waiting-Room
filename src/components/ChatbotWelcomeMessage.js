import React from 'react'
import './ChatbotWelcomeMessage.css'

const ChatbotWelcomeMessage = ({ handleDisplayChatbot }) => {
  return (
    <div>
      <div>
        <p>Welcome You, <br /> You will be notified as soon as the doctor joins the video consultation.</p>
        <button onClick={handleDisplayChatbot}>Ok</button>
      </div>
      <img className='Chatbot__avatar' src='https://via.placeholder.com/60' alt='chatbot avatar' />
    </div>
  )
}

export default ChatbotWelcomeMessage
