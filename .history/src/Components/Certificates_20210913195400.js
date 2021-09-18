import React from 'react'
import './Certificates.css'

function Certificates() {
    const certificate_array = [{
        c_link: 'https://www.hackerrank.com/certificates/9f2182f712fd',
        name: 'Problem Solving Basic'
    },
    {
        c_link: 'https://www.hackerrank.com/certificates/d80e39a55532',
        name: 'React Basic'
    },
    {
        c_link: 'https://www.hackerrank.com/certificates/eacf44a6fc14',
        name: 'JavaScript Basic'
    },
    {
        c_link: 'https://www.hackerrank.com/certificates/cb385d26e4de',
        name: 'SQL Basic'
    }
    ]

    return (
        <div className="certificates">
            <div className="certificates__header">
                <h1>My Certificates</h1>
                <h4>---<span>Achievements</span>---</h4>
            </div>
            {certificate_array.map((merit) => {
                return (
                    <div className="certificates__container">

                    </div>
                )
            })}
        </div>
    )
}

export default Certificates
