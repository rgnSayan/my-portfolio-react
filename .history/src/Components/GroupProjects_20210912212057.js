import React, { Fragment } from 'react'
import './GroupProjects.css'

function GroupProjects() {
    return (
        <Fragment>
            <div className="soloProjects">
                <div className="soloProjects__card">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLT6C4Q8b3oWEAVsJDe5dJ-Bx4NXrHVdn4GtX205=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <h1>Oye Beauty</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>Axios</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://oyebeauty.in/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>

                <div className="soloProjects__card">
                    <img src="https://lh3.googleusercontent.com/proxy/kvB1bZWumLdWKgJEHLqbHbfI1Hj15vtPc_flKha1Bfp3MEEZ7ZfL81g34FYLjK-8CFhWNsiXLD76ItPhQWqYfchI" alt="" />
                    <h1>Food Ordering Application</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Axios</li>
                        <li>Redux</li>
                    </ul>
                    <div className="soloProjects__button">
                        <a href="https://github.com/rgnSayan/FoodOrdering-React" target="_blank" rel="noreferrer">
                            <button>Source Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GroupProjects
