import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as FcIcons from 'react-icons/fc'
import * as GiIcons from 'react-icons/gi'
import '../assets/sidenav.css'
import { IconContext } from 'react-icons';

const SlideNav = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className=" navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiFillCloseCircle />
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/home"><AiIcons.AiFillHome /> <span>Home</span></Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/about" ><FcIcons.FcAbout /> <span>About</span></Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/edu" ><FaIcons.FaBook /> <span>Education</span></Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/skills"><GiIcons.GiSkills /><span>Skills</span></Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/work"><IoIcons.IoMdCode /><span>Work</span></Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/contact"><AiIcons.AiFillContacts> </AiIcons.AiFillContacts> <span>Contact</span></Link>
                    </li>
                    <li className="nav-text">
                        <button  className="btn btn-info" onClick={()=>window.open("https://drive.google.com/file/d/1ticx4_rwvxYJBWyktFH3GysFFUrHSS9C/view?usp=sharing")}><FaIcons.FaDownload></FaIcons.FaDownload>   <span>CV</span></button>
                    </li>
                    
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default SlideNav
