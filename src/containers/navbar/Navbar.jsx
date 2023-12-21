import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const[isActive, setActive] = useState(false);
    const [activeDisplay, setActiveDisplay] = useState("");
    const toggleClass = () => {
        setActive(!isActive);
    }

    const PAGE_NAMES = [
        {href: "/", displayName: "Home"},
        {href: "/about", displayName: "About"},
        {href: "/projects", displayName: "Projects"},
        {href: "/music", displayName: "Music"},
        {href: "/timeline", displayName: "Personal Timeline"},
    ]
    
  return (
    <div className="navbar">
        <div className="content">
            <div className="menu">
                {PAGE_NAMES.map((page, index) => {
                    return (
                        <div className="link">
                            <a href={page.href} onMouseEnter={e => {setActiveDisplay(page.displayName)}} onMouseLeave={() => setActiveDisplay("")}>
                                <h1>{page.displayName}</h1>
                            </a>
                            {activeDisplay === page.displayName && <hr className="link-line"/>}
                        </div>
                    )
                })}
            </div>
           
            <div className="hamburger">
                <button onClick={toggleClass} id="hamburger"className={isActive ? "is-active" : null}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div id="overlay" className={isActive ? "is-active" : null}>
                    {PAGE_NAMES.map((page, index) => {
                        return (
                            <>
                            <a className={isActive ? "is-active" : null} href={page.href}><p>{"0" + (index + 1)}</p>{page.displayName}</a>
                            <span className={isActive ? "is-active" : null} ></span>
                            </>
                        )
                    })}
        
                </div>
            </div>
        </div>
        <hr className="line"/>
    </div>
  )
}

    

export default Navbar