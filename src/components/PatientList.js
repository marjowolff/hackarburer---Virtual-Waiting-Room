import React from 'react';
import Patient from './Patient'
import './PatientList.css'


const patients = [
  {
    id:1,
    name: 'Patient A',
    status:'other'
  },
  {
    id:2,
    name: 'Patient B',
    status:'other'
  },
  {
    id:3,
    name: 'You',
    status:'you'
  },
  {
    id:4,
    name: 'Patient D',
    status:'other'
  }
];


const PatientList = () => (
    <div className = "PatientList">
        {
          patients.map(patient => 
          <div key={patient.id}><Patient name={patient.name} status={patient.status}/>
          </div>)
         }     
      </div>
)


export default PatientList;
