import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="login">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">نام کاربری</span>
                    </div>
                    <input type="text" class="form-control" />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">کلمه عبور</span>
                    </div>
                    <input type="password" class="form-control" />
                </div>
                <div class="justify-content-center d-flex"><button class="btn">ورود</button></div>

            </div>
        );
    }
}

export default Login;