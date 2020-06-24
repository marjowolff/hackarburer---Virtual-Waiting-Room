import React from 'react';
import Patient from './Patient'
import './PatientList.css'
import FlipMove from 'react-flip-move'; 

class PatientList extends React.Component {

    state = {
      patients : [
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
      ]
    }

    handleClick = () => {
      console.log('Flipped')
      this.setState ({})
    }

    render () {
      return (<div className = "PatientList">
      <FlipMove>
      {
          this.state.patients.map(patient => 
          <div key={patient.id}><Patient name={patient.name} status={patient.status}/>
          </div>)
         }  
      </FlipMove>
      <button onClick={this.handleClick}>Flip Move</button>
      </div>)
    }
    
}


export default PatientList;
