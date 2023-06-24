import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import '../styles/Navbar.scss';

function Navbar() {
    useEffect(() => {
        // Function to handle the sliding animation of the toggle switch
        const slideSwitch = () => {
            $('.switch-slide').on('click', function () {
                var activeSpan = $('.switch-toggle-slide .active');

                // Check the position of the active span and toggle it accordingly
                if (activeSpan.css('left') === '0px') {
                    activeSpan.css('left', '50%');
                }

                if (activeSpan.css('left') === '125px') {
                    activeSpan.css('left', '0');
                }

                // Toggle the active-switch class on the clicked element
                if ($(this).hasClass('active-switch')) {
                    $('.switch-slide').addClass('active-switch');
                    $(this).removeClass('active-switch');
                } else {
                    $('.switch-slide').removeClass('active-switch');
                    $(this).addClass('active-switch');
                }
            });
        }

        // Function to update the active navigation item based on scrolling position
        const updateNav = () => {
            var lastId,
                topMenu = $(".navbar"),
                topMenuHeight = topMenu.outerHeight() + 15,
                menuItems = topMenu.find("a"),
                scrollItems = menuItems.map(function () {
                    var item = $($(this).attr("Link"));
                    if (item.length) { return item; }
                });

            var fromTop = $(window).scrollTop() + topMenuHeight;

            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });

            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            // Set the active class on the corresponding navigation item
            if (lastId !== id) {
                lastId = id;
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#" + id + "']").parent().addClass("active");
            }
        }

        // Add CSS animation class to the navbar
        $('.navbar').addClass('animated bounceInDown');

        // Listen for scroll event and update the active navigation item
        $(window).on('scroll', function () {
            updateNav();
        });

        // Bind touchstart/mousedown event for button and switch containers
        $('.button-container, .switch-container').bind('touchstart mousedown', function (e) {
            // Add any necessary touch/mouse event handling logic here
        });

        // Update the active navigation item on link click
        $('a').on('click', function () {
            $('.nav-item').removeClass('active');
            $(this).parent().addClass('active');
        });

        // Call the slideSwitch function to enable toggle switch functionality
        slideSwitch();
    }, []);

    return (
        <nav className="navbar-container">
            <ul className="nav navbar">
                <li className="nav-item active"><Link to="/">HOME</Link></li>
                <li className="nav-item"><Link to="/about">ABOUT</Link></li>
                <li className="nav-item"><Link to="/portfolio">PORTFOLIO</Link></li>
                <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
