import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    useEffect(() => {
        const toggleNav = document.querySelector(".toggleNav");
        const flexNav = document.querySelector(".flex-nav ul");

        const handleToggleNav = () => {
            flexNav.classList.toggle("open");
        };

        toggleNav.addEventListener("click", handleToggleNav);

        return () => {
            toggleNav.removeEventListener("click", handleToggleNav);
        };
    }, []);

    return (
        <div className="wrapper">
            <header className="top">
                <h1><Link to="/" title="Bruck">Bruck Negash</Link></h1>
            </header>

            <nav className="flex-nav">
                <a className="toggleNav"><i className="fa fa-bars"></i> Menu</a>
                <ul className="flex-nav li a">
                    <li>
                        <Link to="/" title="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" title="About">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" title="Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" title="Contact">Contact</Link>
                    </li>
                    <li className="social">
                        <a href="https://twitter.com/kato_katherine" title="Twitter"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li className="social">
                        <a href="https://dribbble.com/kathykato" title="Dribbble"><i className="fa fa-dribbble"></i></a>
                    </li>
                    <li className="social">
                        <a href="https://github.com/kathykato" title="GitHub"><i className="fa fa-github"></i></a>
                    </li>
                    <li className="social">
                        <a href="https://www.instagram.com/kathy.kato" title="Instagram"><i className="fa fa-instagram"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;