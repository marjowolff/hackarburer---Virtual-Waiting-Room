import React, { useState } from 'react'

import People from '../images/queue.png'
import Time from '../images/clock.png'

import './Counter.css'

const Counter = ({patients, timeAppointement, timeAnim}) => {
  const [time, setTime] = useState(15)

  const idMe = patients.findIndex(patient => patient.status === 'you')
  const nbrBefore = patients.slice(0, idMe).length

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
          <img className='Counter__icon__clock' src={Time} alt='Clock' />
          <p className={`Counter__info__time ${timeAnim ? 'time-animation' : ''}`}>{time * nbrBefore - timeAppointement}'</p>
        </div>
      </div>
    </div>
  )
}
export default Counter