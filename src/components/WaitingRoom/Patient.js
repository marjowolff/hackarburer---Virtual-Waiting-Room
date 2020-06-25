import React from 'react'
import ReactPlayer from 'react-player'
import './Patient.css'

const Patient = (props) => {
  return (
    <div className='Patient'>
      {props.status === 'you'
        ? (<div className='Patient__PlayerWrapper'>
          <ReactPlayer
            url='https://youtu.be/ObIdE94YQJU?showinfo=0'
            playing
            loop
            width='100%'
            height='100%'
            style={{ 'pointer-events': 'none' }}
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0
                }
              }
            }}
          />
        </div>)
        : <img className='Patient__Img' src={require(`../../${props.pic}`)} alt='patient' />}
      {props.status === 'you'
        ? <div className='Patient__Name Patient__Name__You'> {props.name}</div> : <div className='Patient__Name'> {props.name}</div>}
    </div>

  )
}

export default Patient
