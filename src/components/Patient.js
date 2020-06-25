import React, {useState} from 'react';
import './Patient.css'
import ReactPlayer from 'react-player/youtube'



const Patient = (props) => {

  return (
    <div className="Patient">
<<<<<<< HEAD
      {props.status === 'you' ? 
        (<div className = 'Patient__PlayerWrapper' >
          <ReactPlayer className='react-player' url='https://youtu.be/ObIdE94YQJU?showinfo=0' playing = {true} loop={true} width='100%' height='100%' config={{
    youtube: {
      playerVars: { modestbranding: 1,
      showinfo : 0,
      loop:1
     }
    }
  }}/>
        </div>) 
        : <img src='https://via.placeholder.com/60' />}
      {props.status === 'you' ?
      <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div> 
    
=======
      <img src='https://via.placeholder.com/60' alt='patient avatar' />
      {props.status === 'you' ? <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div>
>>>>>>> dev
  );
}

export default Patient;
