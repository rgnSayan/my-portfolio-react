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
            {
                sidebar ? (<MenuIcon />) : (

        )
            }

        </Fragment>
    )
}

export default Sidebar
