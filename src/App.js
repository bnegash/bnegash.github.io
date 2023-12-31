/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:projectId" element={<Project />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
*/
import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Home from './components/Home';
import './App.css';

function App() {
    // Use useEffect to set the title when the component mounts
    useEffect(() => {
        document.title = '';
    }, []);
    return (
        <>
            <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<Project />} />
        </Routes>
        </>
    );
}

export default App;

