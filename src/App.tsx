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
        <div className="w-full flex justify-between">
            <Link to="/" className="">Main</Link>
            <Link to="/about-me" className="">Who am I?</Link>
            <Link to="/projects" className="">Projects</Link>
            <Link to="/articles" className="">Articles</Link>
            <Link to="/contact-me" className="">Contact Me</Link>
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
