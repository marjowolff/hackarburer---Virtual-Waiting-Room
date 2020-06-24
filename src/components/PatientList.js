import React from 'react';
import Patient from './Patient'
import './PatientList.css'
import FlipMove from 'react-flip-move'; 

const PatientList = ({patients}) => {

      return (<div className = "PatientList">
      <FlipMove>
      {
          patients.map(patient => 
          <div key={patient.id}><Patient name={patient.name} status={patient.status}/>
          </div>)
         }  
      </FlipMove>
      </div>)
    
}


export default PatientList;
