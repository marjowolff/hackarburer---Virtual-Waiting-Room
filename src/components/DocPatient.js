import React, {useState} from 'react';
import './DocPatient.css'



const DocPatient = (props) => {

  return (
    <div className="DocPatient">
      <img src='https://via.placeholder.com/60' />
      {props.status === 'you' ? <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div>
  );
}

export default DocPatient;
