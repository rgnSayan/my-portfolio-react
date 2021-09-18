import React from 'react'
import HomePage from './HomePage'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'
import Experience from './Experience'

function Home() {
    return (
        <div className="home">
            <HomePage />
            <Skills />
            <Projects />
            <Certificates />
            <Experience />
        </div>
    )
}

export default Home
