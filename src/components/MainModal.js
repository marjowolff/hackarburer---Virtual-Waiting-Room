import React from 'react';
import Chatbot from './Chatbot';

const MainModal = () => {

  return (
    <div className="MainModal">
      <div className="MainModal__title">
        Mon titre
      </div>
      <div className="MainModal__chatbot">
        <Chatbot />
      </div>
    </div>
  )
}

export default MainModal;
