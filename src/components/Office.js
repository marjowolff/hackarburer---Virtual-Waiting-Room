import React from 'react'

import './Office.css'


const Office = ({ patient,timeAppointement,anim }) => {

  return (
    <div className='Office'>
      <p className='Office__anoucement'>Appointement has started {timeAppointement} minute<span style={timeAppointement<2? {display:'none'}:{display:'inline'}}>s</span> ago </p>
      <div className='Office__doctor'>
        <img className='Office__avatar' src={require('../images/1.png')} alt='doctor avatar' />
        <div className='Office__doctor__info'>
          <h2>Dr James White</h2>
          <p>General practitioner</p>
        </div>
      </div>
      <div className= {anim===true ? 'Office__patient Office__patient__animation' : 'Office__patient'}>
        <img className='Office__avatar' src={require(`../${patient.pic}`)}  alt='patient avatar' />
        <div className='Office__patient__info'>
          {patient.name}
        </div>
      </div>
    </div>
  )
}

export default Office
