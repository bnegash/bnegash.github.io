import React from "react";
import { Card } from "react-bootstrap"; // Import the Card component
import profilePic from "../images/profile-pic.jpg"; // Import your profile picture
import "../styles/About.css"; // Import your custom CSS for the card

const AboutCard = () => {
    return (
        <Card className="about-card">
            <Card.Body>
                <div className="about-content">
                    <div className="about-text">
                        <h1 className="about-title">About Me</h1>
                        <p>
                            Hi, I'm Bruck! I am an aspiring Full Stack Engineer, Developer. I recently graduated from{" "}
                            <a
                                href="https://www.calstatela.edu/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                California State University - Los Angeles
                            </a>{" "}
                            with a B.S. in Computer Science.
                        </p>
                        <p>
                            COMING SOON
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={profilePic} alt="Profile" className="about-profile" />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;
