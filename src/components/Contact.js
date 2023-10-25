import React, {useState} from "react";
import SocialBtns from "./SocialBtns";
import "../styles/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server
        console.log(formData);
    };

    return (
        <HTML>
        <HEAD>
        <TITLE>Contact</TITLE>
        </HEAD>
        <div className="contact-form-container">
            <header>CONTACT</header>
            <form id="form" className="topBefore" onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    placeholder="NAME"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    id="email"
                    type="text"
                    placeholder="E-MAIL"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    id="message"
                    type="text"
                    placeholder="MESSAGE"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <input id="submit" type="submit" value="Submit!" />
            </form>
            <SocialBtns />
        </div>
    );
}

export default Contact;
