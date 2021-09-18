import React, { useState } from 'react'
import SoloProjects from './SoloProjects'
import GroupProjects from './GroupProjects'
import './Projects.css'

function Projects() {
    const [soloProjectSelected, setSoloProjectSelected] = useState(true);
    return (
        <div className="project__container">
            <div className="projects">
                <h1>My Projects</h1>
                <h3>----<span>What I Have Done Till Date</span>----</h3>
            </div>
            <div className="project__cards">
                <div className="projects__toggleSwitch">
                    <h4>Solo Projects</h4>
                    <input
                        class="tgl tgl-ios"
                        id="cb2"
                        type="checkbox"
                        onChange={(e) => setSoloProjectSelected(!soloProjectSelected)}
                    />
                    <label class="tgl-btn" for="cb2"></label>
                    <h4>Team Projects</h4>
                </div>
                <div className="projects__content">
                    {soloProjectSelected ? <SoloProjects /> : <GroupProjects />}
                </div>
            </div>
        </div>
    )
}

export default Projects
