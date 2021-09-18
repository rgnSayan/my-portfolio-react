import React, { Fragment } from 'react'
import './GroupProjects.css'
import makeup from '../images/makeup.png'

function GroupProjects() {
    return (
        <Fragment>
            <div className="groupProjects">
                <div className="groupProjects__card">
                    <img src="https://lh3.googleusercontent.com/proxy/VFGxvLPA_HomPtZDnvkVSvTexpd_9jk2WOl1U4PptBfd9wLs9Sdn25AX_GRzipyTM7Pkw37bZSv2MtCPSlpjSkGkhS1tOcB27NXA3-LRaW0dktDFUhLJr5Qwlkb7zAogeXzozVoN6hAm4U465Fvt6NfGTVJaAkjQ82tx25rpQ4d5LTEunL1C9CqZP0Y" alt="" />
                    <h1>Oye Beauty</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Material-UI</li>
                        <li>Axios</li>
                    </ul>
                    <div className="groupProjects__button">
                        <a href="https://oyebeauty.in/" target="_blank" rel="noreferrer">
                            <button>View Output</button>
                        </a>
                    </div>
                </div>

                <div className="groupProjects__card">
                    <img src="https://lh3.googleusercontent.com/proxy/kvB1bZWumLdWKgJEHLqbHbfI1Hj15vtPc_flKha1Bfp3MEEZ7ZfL81g34FYLjK-8CFhWNsiXLD76ItPhQWqYfchI" alt="" />
                    <h1>Food Ordering Application</h1>
                    <h4>---<span>Tools Used</span>---</h4>
                    <ul>
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>Axios</li>
                        <li>Redux</li>
                    </ul>
                    <div className="groupProjects__button">
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
