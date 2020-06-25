import React from 'react';
import FlipMove from 'react-flip-move'; 
import DocPatient from './DocPatient'
import './DocPatientList.css'

const DocPatientList = ({patients}) => {

      return (<div className = "DocPatientList">
      <FlipMove>
      {
          patients.filter((patient,index) => (index>0 && index<5)).map(patient => 
          <div key={patient.id}><DocPatient name={patient.name} status={patient.status} pic={patient.pic}/>
          </div>)
         }  
      </FlipMove>
      </div>)
    
}


export default DocPatientList;
