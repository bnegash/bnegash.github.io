import React from "react";
import profilePic from "../images/profile-pic.jpg";
import blogs from "../data/blogs.json";
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <div className="about-content">
                <img src={profilePic} alt="Profile" className="about-profile"/>
                <p>
                    Hi, I'm Bruck! I am an aspiring Full Stack Engineer,
                    Developer. I recently graduated from {" "}
                    <a
                        href="https://www.calstatela.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        California State University - Los Angeles
                    </a>{" "}
                    with a B.S. in Computer Science
                </p>
                <p>
                    Aside from my love for all things tech,
                    I also like to enjoy downtime by exercising, watching the movies, cooking,
                    and exploring the world as much as I can.
                </p>

                <h2 className="about-subtitle">Tech Stack</h2>
                <ul className="about-posts">
                    {blogs.map((blog) => (
                        <li key={blog.id}>
                            <a href={blog.url} target="_blank" rel="noopener noreferrer">
                                {blog.title}
                            </a>
                            <span className="about-date">{blog.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;
