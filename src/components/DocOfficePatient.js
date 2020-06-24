import React from 'react'

import './DocOfficePatient.css'

const DocOfficePatient = ({ patient }) => {
    return (
        <div className='DocOfficePatient'>
            <h3>Your current Patient :</h3>
            <div className='DocOfficePatient__current'>
                <img className='DocOfficePatient__avatar' src='https://via.placeholder.com/60' alt='patient avatar' />
                <p>{patient.name}</p>
            </div>
        </div>
    )
}

export default DocOfficePatient
