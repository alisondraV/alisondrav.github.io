import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Articles from './pages/Articles';
import ContactMe from './pages/ContactMe';
import Main from './pages/Main';
import MenuClose from '@assets/MenuClose.svg';
import MenuDrD from '@assets/MenuDrD.svg';
import Projects from './pages/Projects';
import React, { useState } from 'react';

function App() {
    const [visibility, setVisibility] = useState('hidden');

    return (
    <BrowserRouter>
        <img src={MenuDrD} alt="Close" className="top-0 fixed pl-24 pt-10" onClick={() => setVisibility('')} />
        <div className={`${visibility} w-full flex justify-between top-0 fixed bg-dark-blue py-10 px-24 text-2xl text-background`}>
            <img src={MenuClose} alt="Close" onClick={() => setVisibility('hidden')} />
            <Link to="/" className="font-header">Main</Link>
            <Link to="/about-me" className="font-header">Who am I?</Link>
            <Link to="/projects" className="font-header">Projects</Link>
            <Link to="/articles" className="font-header">Articles</Link>
            <Link to="/contact-me" className="font-header">Contact Me</Link>
        </div>

        <Route path="/" component={Main} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/contact-me" component={ContactMe} />
    </BrowserRouter>
  );
}

export default App;
