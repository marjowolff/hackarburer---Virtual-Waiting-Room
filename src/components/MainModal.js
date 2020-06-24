import React from 'react';

import './MainModal.css'

const MainModal = () => {
  return (
    <div className="MainModal">
      <div className="MainModal_title">
        <img src={require('../images/logo.png')} alt='waiting_room_logo'/>
        <h2>Virtual Waiting Room</h2>
      </div>
      <div className='MainModal_container'>
      </div>
    </div>
  );
}

export default MainModal;
