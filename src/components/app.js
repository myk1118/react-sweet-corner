import React from 'react';
import { Route } from 'react-router-dom'
import '../assets/css/app.scss';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';
import Products from './products';
import ProductDetails from './products/product_details';
import Cart from './cart';

const App = () => (
    <div className="app">
        <div className="container">
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:product_id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Footer />
        </div>
    </div>
);

export default App;
