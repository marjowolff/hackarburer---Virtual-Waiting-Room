import React from 'react'

import './DocOfficePatient.css'

const DocOfficePatient = ({ patient }) => {
    return (
        <div className='DocOfficePatient'>
            <h3>Your current Patient :</h3>
            <div className='DocOfficePatient__current'>
                <img className='Patient__Img' src={require(`../../${patient.pic}`)} alt='patient avatar' />
                <p>{patient.name}</p>
            </div>
        </div>
    )
}

export default DocOfficePatient
