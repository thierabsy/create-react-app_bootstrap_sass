import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Page2 from './components/Page2';
import QueryString from './components/QueryString';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const Myroutes = () => {
    return (
        <div>
            <BrowserRouter >
                <div>
                    <Header />
                    <Route exact = { true } path="/" component={ App } />
                    <Route path="/page" component={ Page2 } />
                    <Route path="/dynamic/:variable" component={ QueryString } />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Myroutes;


