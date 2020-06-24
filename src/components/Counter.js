import React, { useState } from 'react'

import People from '../images/queue.png'
import Time from '../images/clock.png'

import './Counter.css'

const Counter = () => {
  const [time, setTime] = useState(15)
  const [people, setPeaople] = useState(2)
  
  return (
    <div className='Counter'>
      <div className='Counter__people'>
        <p className='Counter__title'>Number of people in front of you</p>
        <div className='Counter__info'>
          <img src={People} alt='Line of people'/>
          <p>{people}</p>
        </div>
      </div>
      <div className='Counter__time'>
        <p className='Counter__title'>Estimated waiting time</p>
        <div className='Counter__info'>
          <img src={Time} alt='Clock'/>
          <p>{time * people}'</p>
        </div>
      </div>
    </div>
  )
}
export default Counter