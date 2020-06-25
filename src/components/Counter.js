import React from 'react'

import People from '../images/queue.png'
import Time from '../images/clock.png'

import './Counter.css'

const Counter = ({time, nbrBefore, timeAnim}) => {
  return (
    <div className='Counter'>
      <div className='Counter__people'>
        <p className='Counter__title'>Number of people in front of you</p>
        <div className='Counter__info'>
          <img src={People} alt='Line of people'/>
          <p>{nbrBefore}</p>
        </div>
      </div> 
      <div className='Counter__time'>
        <p className='Counter__title'>Estimated waiting time</p>
        <div className='Counter__info'>
          <img src={Time} alt='Clock'/>
          <p className={`Counter__info__time ${timeAnim ? 'time-animation' : ''}`}>{time}'</p>
        </div>
      </div>
    </div>
  )
}
export default Counter