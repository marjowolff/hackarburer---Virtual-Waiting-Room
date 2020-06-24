import React, { useState, useEffect } from 'react'

import './Office.css'

const Office = () => {
  const [timer, setTimer] = useState(0)

  const clock = () => {
    setInterval(() => {setTimer(timer + 1)}, 1000);
  }

  // useState(() => clock(), [])

  return (
    <div className='Office'>
      <p className='Office__anoucement'>In consultation since {timer} minutes</p>
      <div className='Office__doctor'>
        <img className='Office__avatar' src='https://via.placeholder.com/60' alt='doctor avatar' />
        <div className='Office__doctor__info'>
          <h2>Dr James White</h2>
          <p>General practitioner</p>
        </div>
      </div>
      <div className='Office__patient'>
        <img className='Office__avatar' src='https://via.placeholder.com/60'  alt='patient avatar' />
      </div>
    </div>
  )
}

export default Office
