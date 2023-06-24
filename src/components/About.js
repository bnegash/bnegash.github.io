import React from "react";
import profilePic from "../assets/images/profile-pic.jpg";
import blogs from "../data/blogs.json";
import "../styles/About.css";
const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
                <img src={profilePic} alt="Profile" className="about-profile" />
                <p>
                    Hi, I'm Bruck! I'm a software engineer
                    working for the{" "}
                    <a
                        href="https://www.usekojo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        City of Vernon as an IT-Intern
                    </a>
                    . Previously, I worked at{" "}
                    <a
                        href="https://www.lever.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Lever
                    </a>
                    . I recently graduated from{" "}
                    <a
                        href="https://www.calstatela.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        California State University - Los Angeles
                    </a>{" "}
                    with a degree in Computer Science
                </p>
                <p>
                    In my free time I like to hike with my dog, cook, and read.
                </p>
                <p>
                    I wrote this website almost entirely using{" "}
                    <a
                        href="https://openai.com/blog/chatgpt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ChatGPT
                    </a>
                    , with some help of{" "}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    ,{" "}
                    <a
                        href="https://particles.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        react-tsparticles
                    </a>
                    , and{" "}
                    <a
                        href="https://reactrouter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        react-router-dom
                    </a>
                    . I generated the portfolio banner images using{" "}
                    <a
                        href="https://openai.com/dall-e/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DALL-E
                    </a>
                    .
                </p>

                <h2 className="about-subtitle">Blog Posts</h2>
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
