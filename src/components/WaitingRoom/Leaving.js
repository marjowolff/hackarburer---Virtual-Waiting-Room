import React from 'react'

import './Leaving.css'

const Leaving = ({leaving, hide}) => {

    return (
        <div className='Leaving' style={leaving ?{display: 'block'}:{display: 'none'}}>
            <div className='Leaving__container'>
                <p>Before leaving, please tell us the reason to inform the practitioner :</p>
                <textarea></textarea>
                <div className='Leaving__container__actions'>
                    <button onClick={hide} id='LCA-leave'>send and leave</button>
                    <button onClick={hide} id='LCA-stay'>Back to Waiting Room</button>
                </div>
            </div>
        </div>
    )
}

export default Leaving