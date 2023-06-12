import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="macintosh" aria-label="1984 Macintosh illustration">
            <div className="monitor">
                <div className="monitor-inner">
                    <div class="screen-cutout">
                        <div className="screen"></div>
                    </div>
                    <div className="logo">
                        <p>🏳️‍🌈</p>
                    </div>
                    <div className="opening">
                        <div className="opening-inner">
                        </div>
                    </div>
                </div>
            </div>
            <div class="foot">
                <div class="inset"></div>
                <div class="cable-container">
                    <div class="cable-hole"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;


