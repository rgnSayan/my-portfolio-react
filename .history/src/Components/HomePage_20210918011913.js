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
                    <h1></h1>
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
