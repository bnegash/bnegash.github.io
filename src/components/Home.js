import React, {useEffect} from "react";
import "../styles/Home.css";

function Home() {
    // Use useEffect to set the title when the component mounts
    useEffect(() => {
        document.title = 'HOME';
    }, []);
    return (
        <div className="typing-wrapper">
            <div className="typing-demo">
                Hi, I'm Bruck.
            </div>
        </div>
    );
}

export default Home;


