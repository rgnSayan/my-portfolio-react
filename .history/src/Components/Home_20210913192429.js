import React from 'react'
import HomePage from './HomePage'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'
import Certificate from './Certificate'

function Home() {
    return (
        <div className="home">
            <HomePage />
            <Skills />
            <Projects />
            <Cerificate />
        </div>
    )
}

export default Home
