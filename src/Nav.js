import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true)
    } else {
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
}, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="div__contents">
            <img className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="the netflix logo" 
                />

            <img className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
                alt="a netfix avatar" 
                />
        
            </div>
        </div>
    )
}

export default Nav