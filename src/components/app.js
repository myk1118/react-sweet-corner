import React from 'react';
import { Route } from 'react-router-dom'
import '../assets/css/app.scss';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';

const App = () => (
    <div className="app">
        <div className="container">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Footer />
        </div>
    </div>
);

export default App;
