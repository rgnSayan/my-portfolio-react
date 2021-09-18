import React from 'react'
import './Certificates.css'
import javascript from '../images/javaScript.png'
import juspay from '../images/Juspay.png'

function Certificates() {
    return (
        <div className="certificates">
            <div className="certificates__header">
                <h1>My Certificates</h1>
                <h4>---<span>Achievements</span>---</h4>
            </div>
            <div className="certificates__container">
                <img src={javascript} alt="###" />
                <img src={juspay} alt="###" />
            </div>
            <div className="certificates__container">
                <img src={javascript} alt="###" />
                <img src={juspay} alt="###" />
            </div>
        </div>
    )
}

export default Certificates
