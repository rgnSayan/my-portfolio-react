import React from 'react'
import './Experience.css'

function Experience() {
    return (
        <div className="experience">
            <div className="experience__header">
                <h1>Experience</h1>
                <h4>---<span>My Adventure</span>---</h4>
            </div>

            <div className="experience__content">

                <div className="experience__container">
                    <div className="container__id">
                        <p>1</p>
                    </div>
                    <div className="container__header">
                        <h2>Prime Vogue</h2>
                        <h4>5th July 2021 - 10 Sep 2021</h4>
                        <h3> Front End Developer </h3>
                    </div>
                    <div className="container__body">
                        <p>During the period, I handled Designing & Development of the website as a web developer. I worked on various frameworks including ReactJS, Redux, Material-UI, Firebase.</p>
                    </div>
                    <div className="container__skills">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>Firebase</p>
                        <p>Redux</p>
                    </div>
                    <div className="container__button">
                        <button>View Docs</button>
                    </div>
                </div>

                <div className="experience__container">
                    <div className="container__id">
                        <p>2</p>
                    </div>
                    <div className="container__header">
                        <h2>Oye Beauty</h2>
                        <h4>6th August 2021 - Present</h4>
                        <h3> Front End Developer </h3>
                    </div>
                    <div className="container__body">
                        <p>During the period, I am handling Designing & Development of the website as a web developer. I worked on various frameworks including ReactJS, Redux ,Firebase.</p>
                    </div>
                    <div className="container__skills">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>ReactJS</p>
                        <p>Firebase</p>
                        <p>Redux</p>
                        <p></p>
                    </div>
                    <div className="container__button">
                        <button>View Docs</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience
