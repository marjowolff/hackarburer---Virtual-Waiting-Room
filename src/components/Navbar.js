import React from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img src={require('../images/doctolib-logo.png')} alt='doctolib-logo'/>
            <p>Name of the Patient</p>
        </nav>
    )
}

export default Navbar