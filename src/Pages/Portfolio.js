import React from "react";
import "./Portfolio.css";
import itLogo from "../assets/images/IT-Logo.jpg";

function Portfolio() {
    const imgContent = document.querySelectorAll('.img-content-hover');

    function showImgContent(e) {
        for(var i = 0; i < imgContent.length; i++) {
            let x = e.pageX;
            let y = e.pageY;
            imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    };

    document.addEventListener('mousemove', showImgContent);
    return (
        <div className="wrapper">
            <section className="gallery">
                <div className="container">
                    <div className="grid">
                        <div className="column-xs-12 column-md-4">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/8b1cWDyvT7Y"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Smart Watch</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Smart Watch</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                        <div className="column-xs-12 column-md-4">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/5VXH4RG88gc"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Camera Film</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Camera Film</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                        <div className="column-xs-12 column-md-4">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/XtUd5SiX464"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Coffee</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Coffee</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                        <div className="column-xs-12 column-md-6">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/JYGnB9gTCls"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Phone</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Phone</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                        <div className="column-xs-12 column-md-6">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/-RBuQ2PK_L8"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Keyboard</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Keyboard</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                        <div className="column-xs-12">
                            <figure className="img-container">
                                <img src="https://source.unsplash.com/P44RIGl9V54"/>
                                <figcaption className="img-content">
                                    <h2 className="title">Wrist Watch</h2>
                                    <h3 className="category">Showcase</h3>
                                </figcaption>
                                <span className="img-content-hover">
            <h2 className="title">Wrist Watch</h2>
            <h3 className="category">Showcase</h3>
          </span>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
