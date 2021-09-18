import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './HomePage.css'

function HomePage() {
    return (
        <div className="homePage" id="home">
            <div className="homePage__details">
                <h3>Hi THERE ! </h3>
                <h1> I'M <span>Sayan Mondal</span></h1>
                <p>I'm a Front End Engineer from Durgapur, West Bengal☀️.<br /> I describe myself as a passionate developer who loves coding, open source, and the web platform 💻.I am Currently Pursuing BTech From KIIT University.Bhubaneswar 🎓.</p>
            </div>
            <div className="about__me">
                <label>About Me</label>
                <PersonIcon />
            </div>
        </div>
    )
}

export default HomePage
