import './App.css'
import {Landing} from "./pages/landing.jsx";
import {Navbar} from "./components/navbar.jsx";
import React, { useRef } from "react";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";
import {Footer} from "./components/footer.jsx";
import {About} from "./pages/about.jsx";
import {Art} from "./pages/art.jsx";
import {Projects} from "./pages/projects.jsx";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function AnimatedRoutes() {
    const location = useLocation();
    const nodeRef = useRef(null);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                classNames="page"
                timeout={300}>
                <div ref={nodeRef}>
                    <Routes location={location}>
                        <Route index element={<Landing />} />
                        <Route path="/index" element={<Landing />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/art-main" element={<Art />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

function App() {
    return (
        <HashRouter>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </HashRouter>
    )
}

export default App