import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import ContactPage from './pages/contactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={LandingPage} />
                <Route path="/contact" component={ContactPage} />
                </Routes>
        </Router>
    );
}

export default App;
