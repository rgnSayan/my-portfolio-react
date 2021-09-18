import React from 'react'
import './Certificates.css'

function Certificates() {
    return (
        <div className="certificates">
            <div className="certificates__header">
                <h1>My Certificates</h1>
                <h4>---<span>Achievements</span>---</h4>
            </div>


            <div className="certificates__container">
                <img src={merit.c_link} alt="###" />
                <h3>{merit.name}</h3>
            </div>

        </div>
    )
}

export default Certificates
