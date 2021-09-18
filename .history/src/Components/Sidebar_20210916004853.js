import React, { useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Sidebar.css'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const sidebarMenu = () => setSidebar(!sidebar);
    return (
        <Fragment>


        </Fragment>
        {
        sidebar ? (<MenuIcon />) : (
            <div className="sidebar">
                <div className="sidebar__photo">
                    <img src="https://scontent.fdbd2-1.fna.fbcdn.net/v/t1.6435-9/50722839_1972004216426448_5408939378581962752_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hJIp246pz9oAX-RyI-j&_nc_ht=scontent.fdbd2-1.fna&oh=cc929815b4dcd171b51b8dd32e2a6384&oe=61610B0F" alt="" />
                    <h2>Sayan Mondal</h2>
                    <div className="social__media">
                        <a href="https://www.facebook.com/sayan28072000" target="_blank" rel="noreferrer"><FacebookIcon style={{ color: "#4267B2" }} /></a>
                        <a href="https://www.instagram.com/sayan_ronnie/" target="_blank" rel="noreferrer"><InstagramIcon
                            style={{ color: "#cd486b" }} /></a>
                        <a href="https://twitter.com/SAYANMO83622224/" target="_blank" rel="noreferrer"><TwitterIcon
                            style={{ color: "#1DA1F2" }} /></a>
                        <a href="https://www.linkedin.com/in/sayan-mondal-9145731ba/" target="_blank" rel="noreferrer">
                            < LinkedInIcon style={{ color: "#0077b5" }} /></a>
                        <a href="https://github.com/rgnSayan" target="_blank" rel="noreferrer"><GitHubIcon
                            style={{ color: "#4078c0" }} /></a>
                    </div>
                </div>

                <div className="sidebar__option">
                    <a href="#home"><span>🏠 Home</span></a>
                    <a href="#skills"><span>💻 My Skills</span></a>
                    <a href="#projects"><span> 📁 My Projects</span></a>
                    <a href="#certificates"><span> 📜 Certificates</span></a>
                    <a href="#experiences"><span>💼 Experience</span></a>
                    <a href="#contact"><span>📞 Contact Me</span></a>
                </div>

            </div>
        )
    }


    )
}

export default Sidebar
