import React from 'react';
import DocPatient from './DocPatient'
import './DocPatientList.css'
import FlipMove from 'react-flip-move'; 

const DocPatientList = ({patients}) => {

      return (<div className = "DocPatientList">
      <FlipMove>
      {
          patients.filter((patient,index) => (index>0 && index<5)).map(patient => 
          <div key={patient.id}><DocPatient name={patient.name} status={patient.status}/>
          </div>)
         }  
      </FlipMove>
      </div>)
    
}


export default DocPatientList;
