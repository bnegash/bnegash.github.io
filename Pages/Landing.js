import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import "./Sphere.scss"

function Landing() {
    return (
        <div className="container">
            {/* Sphere Artwork */}
            <div className="box">
                <div className="sphere"></div>
                <div className="cy">
                    <div className="cy__cy top"></div>
                    <div className="cy__lec mid"></div>
                    <div className="cy__cy btm"></div>
                    <div className="sphare-shadow"></div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
