import React from 'react'
import HomePage from './HomePage'
import './Home.css'
import Projects from './Projects'
import Skills from './Skills'
import Certificates from './Certificates'
import Experience from './Experience'
import Contact from './Contact'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <HomePage />
            <Skills />
            <Projects />
            <Certificates />
            <Experience />
            <Contact />
        </div>
    )
}

export default Home
