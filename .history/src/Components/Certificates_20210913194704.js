import React from 'react'
import './Certificates.css'

function Certificates() {
    const certificate_array = [{
        c_link: 'https://www.hackerrank.com/certificates/9f2182f712fd',
        name: 'Problem Solving Basic'
    }]
    return (
        <div className="certificates">
            <div className="certificates__header">
                <h1>My Certificates</h1>
                <h4>---<span>Achievements</span>---</h4>
            </div>
            <div className="certificates__container">

            </div>
        </div>
    )
}

export default Certificates
