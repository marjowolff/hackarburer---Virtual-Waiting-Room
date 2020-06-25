import React, {useState} from 'react';
import './Patient.css'



const Patient = (props) => {

  return (
    <div className="Patient">
      <img src='https://via.placeholder.com/60' alt='patient avatar' />
      {props.status === 'you' ? <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div>
  );
}

export default Patient;
