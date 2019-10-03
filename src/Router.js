import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';

import Home from './route/Home/Home';
import Draw from './route/Draw/Draw';
import Register from './route/Sign/Register';

class MyRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Route path="/" exact component={Home} />
                    <Route path="/draw" component={Draw} />
                    <Route path="/Register" component={Register} />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default MyRouter;