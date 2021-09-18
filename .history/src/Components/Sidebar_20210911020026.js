import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__option">
                <div className="sidebar__photo">
                    <img src="https://scontent.fdbd2-1.fna.fbcdn.net/v/t1.6435-9/50722839_1972004216426448_5408939378581962752_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hJIp246pz9oAX-RyI-j&_nc_ht=scontent.fdbd2-1.fna&oh=cc929815b4dcd171b51b8dd32e2a6384&oe=61610B0F" alt="" />
                    <label></label>
                </div>
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
