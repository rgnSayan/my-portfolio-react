import React from 'react'
import './SoloProjects.css'

function SoloProjects() {
    // const projects = [{
    //     img: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png',
    //     name: 'Netflix Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    // },
    // {
    //     img: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
    //     name: 'Facebook Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'react-facebook' }],
    // },
    // {
    //     img: 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG',
    //     name: 'Amazon Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'Firebase-Auth' }],
    // }, {
    //     img: 'https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo.png',
    //     name: 'Whatsapp Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'Google-auth' }],
    // }, {
    //     img: 'https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png',
    //     name: 'Twitter Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'react-twitter' }, { item: 'react-twitter' }],
    // }, {
    //     img: 'http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png',
    //     name: 'Slack Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'Google-auth' }],
    // }, {
    //     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
    //     name: 'Instagram Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'movie-trailer' }, { item: 'axios' }],
    // }, {
    //     img: 'https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png',
    //     name: 'Spotify Clone',
    //     tools: [{ item: 'ReactJS' }, { item: 'Firebase' }, { item: 'Material-UI' }, { item: 'react-spotify' }, { item: 'axios' }],
    // },
    // ]

    return (
        <div className="soloProjects">
            <div className="soloProjects__card">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png" alt="" />
                <h1>Netflix Clone</h1>
                <ul>
                    <li>ReactJS</li>
                    <li>Firebase</li>
                    <li>Material-UI</li>
                    <li>movie-trailers</li>
                    <li>Axios</li>
                </ul>
                <a href="" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                </a>
                <a href="" target="_blank" rel="noreferrer">
                    <button></button>
                </a>
            </div>
        </div>
    )
}

export default SoloProjects
