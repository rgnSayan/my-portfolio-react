import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__option">
                <div className="sidebar__photo">
                    <img src="" alt="" />
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
