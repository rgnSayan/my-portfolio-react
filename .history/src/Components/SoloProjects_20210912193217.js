import React from 'react'
import './SoloProjects.css'

function SoloProjects() {
    const SoloProjects = [{
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReacrJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    },
    {
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReacrJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    },


    ]

    return (
        <div className="soloProjects">
            <div className="soloProjects__card">
                <img src="" alt="" />
                <h1></h1>
            </div>

            <div className="soloProjects__cardBottom">
                <ul>
                    <li></li>
                </ul>
                <button>Source Code</button>
                <button>View Demo</button>
            </div>

        </div>
    )
}

export default SoloProjects
