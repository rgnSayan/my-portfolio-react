import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import './Contact.css'

function Contact() {
    return (
        <div className="contact" id="contact">

            <div className="contact__header">
                <h1>Contact</h1>
                <h4>---<span>How To Reach Me</span>---</h4>
            </div>

            <div className="contact__container">
                <div className="contact__phone">
                    <PhoneIcon style={{ color: "4285F4" }} />
                    <h3>+91 8967697371</h3>
                </div>
                <div className="contact__location">
                    <a href="https://www.google.com/maps/@23.5673375,87.2730191,16z" target="_blank" rel="noreferrer">
                        <RoomIcon style={{ color: 'FF0000' }} />
                    </a>
                    <h3>Durgapur, West Bengal</h3>
                </div>
                <div className="contact__mail">
                    <a href="mailto:1805603@kiit.ac.in" target="_blank" rel="noreferrer">
                        <MailIcon style={{ color: "EA4335" }} />
                    </a>
                    <h3>1805603@kiit.ac.in</h3>
                </div>
            </div>

        </div >
    )
}

export default Contact
