import React, { Fragment } from 'react'
import './GroupProjects.css'

function GroupProjects() {
    return (
        <Fragment>
            <div className="soloProjects">
                <div className="soloProjects__card">
                    <img src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="" />
                    <h1>Oye Beauty</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>Axios</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/slack-clone" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://oyebeauty.in/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
                <div className="soloProjects__card">
                    <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png" alt="" />
                    <h1>Spotify Clone</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>GoogleAuth</li>
                        <li>react-spotify</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/react-spotify" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                        <a href="https://react-spotify-3f749.web.app/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GroupProjects
