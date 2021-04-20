import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Articles from './Pages/Articles';
import ContactMe from './Pages/ContactMe';
import Main from './Pages/Main';
import Projects from './Pages/Projects';
import React from 'react';

function App() {
    return (
    <BrowserRouter>
        <div className="w-full flex justify-between top-0 fixed bg-dark-blue py-6 px-24 text-2xl text-background">
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
