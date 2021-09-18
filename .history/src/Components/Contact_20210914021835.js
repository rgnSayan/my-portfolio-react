import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import './Contact.css'

function Contact() {
    return (
        <div className="contact">

            <div className="contact__header">
                <h1>Contact</h1>
                <h4>---<span>How To Reach Me</span>---</h4>
            </div>

            <div className="contact__container">
                <div className="contact__phone">
                    <PhoneIcon style={{ color: "34A853" }} />
                    <h3>+91 8967697371</h3>
                </div>
                <div className="contact__location">
                    <RoomIcon style={{ color: '#FF0000' }} />
                    <h3>Durgapur, West Bengal</h3>
                </div>
                <div className="contact__mail">
                    <MailIcon style={{ color: "EA4335" }} />
                    <h3>1805603@kiit.ac.in</h3>
                </div>
            </div>

        </div >
    )
}

export default Contact
