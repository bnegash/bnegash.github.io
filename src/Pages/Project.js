import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import "./Project.css";

import apiLogo from '../assets/images/API-Logo.png';
import itLogo from '../assets/images/IT-Logo.jpg';

const Project = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    const { title, description, bannerImage, links, date, additionalImages } =
        project;

    return (
        <div className="container">
            <section className="main">
                <h1>I'm a creative web developer, who specializes in building beautiful websites</h1>
            </section>

            <section className="gallery">
                <ul>
                    <li className="item">
                        <div className="info">
                            <a href="#" title="Project Title">
                                <img src={itLogo} alt="covInternship"/>
                            </a>
                            <h3>IT - Internship</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="info">
                            <a href="#" title="Project Title">
                                <img src="https://source.unsplash.com/RPzWI0rolS8" alt="bridge"/>
                            </a>
                            <h3>Project Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="info">
                            <a href="#" title="Project Title">
                                <img src="https://source.unsplash.com/i1S4n4yQUKM" alt="bridge"/>
                            </a>
                            <h3>Project Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                    <li className="item">
                        <div className="info">
                            <a href="#" title="Project Title">
                                <img src="https://source.unsplash.com/QgHvLSuIcLs"alt="bridge"/>
                            </a>
                            <h3>Project Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Project;