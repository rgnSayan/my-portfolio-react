import React from 'react'
import './Certificates.css'
import javascript from '../images/javaScript.png'
import juspay from '../images/Juspay.png'
import ps from '../images/ProblemSolving.png'
import react from '../images/React.png'
import sql from '../images/SQL.png'

function Certificates() {
    return (
        <div className="certificates">
            <div className="certificates__header">
                <h1>My Certificates</h1>
                <h4>---<span>Achievements</span>---</h4>
            </div>
            <div className="certificates__container">
                <img src={juspay} alt="###" />
            </div>
            <div className="certificates__container">
                <img src={ps} alt="###" />
                <img src={react} alt="###" />
            </div>
            <div className="certificates__container">
                <img src={sql} alt="###" />
                <img src={javascript} alt="###" />
            </div>
        </div>
    )
}

export default Certificates
