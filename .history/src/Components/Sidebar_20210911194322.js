import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__photo">
                <img src="https://scontent.fdbd2-1.fna.fbcdn.net/v/t1.6435-9/50722839_1972004216426448_5408939378581962752_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hJIp246pz9oAX-RyI-j&_nc_ht=scontent.fdbd2-1.fna&oh=cc929815b4dcd171b51b8dd32e2a6384&oe=61610B0F" alt="" />
                <h2>Sayan Mondal</h2>
                <div className="social__media">
                    <a href="https://www.facebook.com/sayan28072000" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/sayan_ronnie/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                    <a href="https://twitter.com/SAYANMO83622224/" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                    <a href="https://www.linkedin.com/in/sayan-mondal-9145731ba/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    <a href="https://github.com/rgnSayan" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                </div>
            </div>

            <div className="sidebar__option">
                <span>🏠 Home</span>
                <span> 📁 My Projects</span>
                <span> 📜 Certificates</span>
                <span>💼 Experience</span>
                <span>📞 Contact Me</span>
            </div>
        </div>
    )
}

export default Sidebar
