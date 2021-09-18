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
                    <PhoneIcon />
                    <label></label>
                </div>
            </div>
        </div>
    )
}

export default Contact
