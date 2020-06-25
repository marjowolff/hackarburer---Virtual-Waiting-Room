import React from 'react';
import './DocPatient.css'



const DocPatient = (props) => {

  return (
    <div className="DocPatient">
      <img className='Patient__Img' src={require(`../${props.pic}`)} alt="patient"/>
      {props.status === 'you' ? <div className="Patient__Name Patient__Name__You"> {props.name}</div> : <div className="Patient__Name"> {props.name}</div>}
    </div>
  );
}

export default DocPatient;
//
