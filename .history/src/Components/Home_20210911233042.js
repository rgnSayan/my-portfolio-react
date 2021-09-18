import React from 'react'
import HomePage from './HomePage'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'

function Home() {
    return (
        <div className="home">
            <HomePage />
            <Skills />
            <Projects />
        </div>
    )
}

export default Home
