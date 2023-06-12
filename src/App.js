import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Project from './Pages/Project';
import Home from './Pages/Home';
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
