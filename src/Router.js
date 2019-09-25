import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import Header from './component/Header';
import Footer from './component/Footer';

import Home from './route/Home/Home';
import Draw from './route/Draw/Draw';
import Register from './route/Sign/Register';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}
const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
}

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
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route path="/" exact component={Home} />
                        <Route path="/draw" component={Draw} />
                        <Route path="/Register" component={Register} />
                    </AnimatedSwitch>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default MyRouter;