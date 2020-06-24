import React, { useState } from 'react'

import './Office.css'

const Office = () => {
  const [timer, setTimer] = useState(0)

  return (
    <div className='Office'>
      <p className='Office__anoucement'>In consultation since {timer} minutes</p>
      <div className='Office__doctor'>
        <img className='Office__avatar' src='https://via.placeholder.com/60' alt='doctor avatar' />
        <div className='Office__doctor__info'>
          <h2>Dr James White</h2>
          <p>Genral practitioner</p>
        </div>
      </div>
      <div className='Office__patient'>
        <img className='Office__avatar' src='https://via.placeholder.com/60'  alt='patient avatar' />
        <div className='Office__patient__info'>
          <h2>Anomynous</h2>
        </div>
      </div>
    </div>
  )
}

export default Office
