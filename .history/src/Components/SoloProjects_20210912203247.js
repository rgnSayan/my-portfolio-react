import React, { Fragment } from 'react'
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
        <React.Fragment>
            <div className="soloProjects">
                <div className="soloProjects__card">
                    <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png" alt="" />
                    <h1>Netflix Clone</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>movie-trailers</li>
                        <li>Axios</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/react-netflix" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://react-netflix-ff234.web.app/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
                <div className="soloProjects__card">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                    <h1>Facebook Clone</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>react-facebook</li>
                        <li>Google-Auth</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/React-Facebook" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://react-facebook-de113.web.app//" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="soloProjects">
                <div className="soloProjects__card">
                    <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
                    <h1>Amazon Clone</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>Email Auth</li>
                        <li>Axios</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/react-amazon" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://react-c53bd.web.app/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
                <div className="soloProjects__card">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
                    <h1>Facebook Clone</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>react-facebook</li>
                        <li>Google-Auth</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/whatsapp-clone" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://react-whatsapp-e5dad.web.app/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SoloProjects
