import React from 'react'

import DocOfficePatient from './DocOfficePatient'
import DocPatientList from './DocPatientList'

import './DocInterface.css'

const DocInterface = ({newPatient, patients}) => {
    return (
        <div className='DocInterface'>
            <header className='DocInterface__header'>
                <DocOfficePatient patient={patients[0]}/>
            </header>
            <main className='DocInterface__main'>
                <section className='DocInterface__left'>
                    <DocPatientList patients={patients}/>
                </section>
                <section className='DocInterface__right'>
                    <div className='DocInterface__right__top'>
                        <p className='DocInterface__right__title'>Your appointement is over ?</p>
                        <button className='DocInterface__next' onClick={newPatient}>Welcome the next patient</button>
                    </div>
                    <div className='DocInterface__right__bottom'>
                        <p className='DocInterface__right__title'>Having some delay ?</p>
                        <p className='DocInterface__right__title'>Inform your following patients you will be<input type='number'></input>minutes late.</p>
                        <button className='DocInterface__send'>send</button>
                    </div>
                    
                </section>
            </main>
            
        </div>
    )
}
export default DocInterface