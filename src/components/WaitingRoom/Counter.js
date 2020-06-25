import React from 'react'

import People from '../../images/queue.png'
import Time from '../../images/clock.png'

import './Counter.css'

const Counter = ({time, nbrBefore, timeAnim}) => {
  return (
    <div className='Counter'>
      <div className='Counter__people'>
        <p className='Counter__title'>People before you</p>
        <div className='Counter__info'>
          <img className='Counter__icon__people' src={People} alt='Line of people'/>
          <p>{nbrBefore}</p>
        </div>
      </div> 
        <div className='Counter__time'>
        <p className='Counter__title'>Estimated waiting time</p>
        <div className='Counter__info'>
          <img className='Counter__icon__clock' src={Time} alt='Clock'/>{
            time >= 0 ? <p className={`Counter__info__time ${timeAnim ? 'time-animation' : ''}`}>{time}'</p> :
            <p className={`Counter__info__time}`}>__'</p>
          }
        </div>
      </div>
    </div>
  )
}
export default Counter