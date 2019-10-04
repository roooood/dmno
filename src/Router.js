import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { User } from './redux/action/user';

import Header from './component/Header';
import Footer from './component/Footer';
import request from './component/Fetch';
import Home from './route/Home/Home';
import Draw from './route/Draw/Draw';
import Register from './route/Sign/Register';

class MyRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.getUserInfo();
    }
    getUserInfo() {
        if (this.props.user.isLogin) {
            request('user/info', { token: this.props.user.token }, res => {
                if (res.success) {
                    this.props.dispatch(User({ isLogin: true, ...res.data }));
                }
                else {
                    this.props.dispatch(User(null));
                }
            })
        }
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

export default connect(state => state)(MyRouter);