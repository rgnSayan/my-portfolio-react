import React, { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal'
import './HomePage.css'

function HomePage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="homePage" id="home">
            <div className="icon__menu" onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </div>
            <div className="modal_component">
                <Modal isOpen={isOpen} className="modal__container">
                    <CloseIcon onClick={() => setIsOpen(false)} />
                    <div className="sidebar__photo">
                    <img src="https://scontent.fdbd2-1.fna.fbcdn.net/v/t1.6435-9/50722839_1972004216426448_5408939378581962752_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hJIp246pz9oAX-RyI-j&_nc_ht=scontent.fdbd2-1.fna&oh=cc929815b4dcd171b51b8dd32e2a6384&oe=61610B0F" alt="" />
                    <h2>Sayan Mondal</h2>
                    <div className="social__media">
                    <a href="https://www.facebook.com/sayan28072000" target="_blank" rel="noreferrer"><FacebookIcon style={{ color: "#4267B2" }} /></a>
                    <a href="https://www.instagram.com/sayan_ronnie/" target="_blank" rel="noreferrer"><InstagramIcon
                    style={{ color: "#cd486b" }} /></a>
                    <a href="https://twitter.com/SAYANMO83622224/" target="_blank" rel="noreferrer"><TwitterIcon
                    style={{ color: "#1DA1F2" }} /></a>
                    <a href="https://www.linkedin.com/in/sayan-mondal-9145731ba/" target="_blank" rel="noreferrer">< LinkedInIcon style={{ color: "#0077b5" }} /></a>
                    <a href="https://github.com/rgnSayan" target="_blank" rel="noreferrer"><GitHubIcon
                    style={{ color: "#4078c0" }} /></a>
                    </div>
                </Modal>
            </div>
            <div className="homePage__details">
                <h3>Hi THERE ! </h3>
                <h1> I'M <span>Sayan Mondal</span></h1>
                <div className="my__bio">
                    <p>I'm a Front End Engineer from Durgapur, West Bengal☀️.
                        I describe myself as a passionate developer who loves coding, open source, and the web platform💻. I'm Currently Pursuing BTech From KIIT University.Bhubaneswar🎓.
                    </p>
                </div>
            </div>
            <div className="about__me">
                <label>About Me</label>
                <PersonIcon />
            </div>
        </div >
    )
}

export default HomePage
