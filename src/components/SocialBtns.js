import React from "react";
import "../styles/Socials.css";

function SocialMediaIcons() {
    return (
        <ul className="social-wrapper">
            <li className="icon github">
                <span className="tooltip">Github</span>
                <a
                    href="https://github.com/bnegash"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                <span><i className="fab fa-github"></i></span>
                </a>
            </li>
            <li className="icon linkedin">
                <span className="tooltip">Linkedin</span>
                <a
                    href="www.linkedin.com/in/brucknegash213"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                <span><i className="fab fa-linkedin"></i></span>
                </a>
            </li>
        </ul>
    );
}

export default SocialMediaIcons;
