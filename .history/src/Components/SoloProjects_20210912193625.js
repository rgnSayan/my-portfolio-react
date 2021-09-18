import React from 'react'
import './SoloProjects.css'

function SoloProjects() {
    const SoloProjects = [{
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix Clone',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    },
    {
        img: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
        name: 'Facebook Clone',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'react-facebook' }],
    },
    {
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    }, {
        img: 'https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'Google-auth' }],
    }, {
        img: 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.pngg',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    }, {
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    }, {
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    }, {
        img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
        name: 'Netflix',
        tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
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
