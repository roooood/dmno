import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../../redux/action/user';
import ReCAPTCHA from "react-google-recaptcha";
import request from '../../component/Fetch';
import Alert from 'react-bootstrap/Alert';

let input = {
    username: 'نام کاربری',
    password: 'کلمه عبور',
    captcha: 'کپچا',
    data: '',
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: 'siavasham',
                password: 'qazwsx',
                captcha: null,
            },
            message: [],
        }
    }
    changeVal(name, e) {
        let val = typeof e == 'string' ? e : e.target.value;
        this.setState(state => (state.form[name] = val, state))
    }
    submit() {
        let message = [];
        for (let i in this.state.form) {
            if (this.state.form[i] == '') {
                message.push({ type: 'warning', text: 'وارد کردن همه فیلد ها الزامی هست' })
                break;
            }
        }
        if (message.length > 0) {
            this.setState({ message })
            return;
        }
        request('user/login', this.state.form, res => {
            let message = [];
            console.log(res)
            if (res.success) {
                this.props.dispatch(User({ isLogin: true, ...res.data }));
                this.props.parent.hide();
                message.push({ type: 'success', text: 'ورود با موفقیت' })
            } else {
                for (let i in res.errors) {
                    message.push({ type: 'danger', text: input[i] + ' - ' + res.errors[i].join(' , ') })
                }
            }
            if (message.length > 0) {
                this.setState({ message })
                return;
            }
        })
    }
    render() {
        return (
            <div class="login">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">نام کاربری</span>
                    </div>
                    <input onChange={(v) => this.changeVal('username', v)} value={this.state.form.username} type="text" class="form-control" />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">کلمه عبور</span>
                    </div>
                    <input onChange={(v) => this.changeVal('password', v)} value={this.state.form.password} type="password" class="form-control" />
                </div>
                <div style={{ marginBottom: 40 }}>
                    <ReCAPTCHA
                        sitekey="6LdIWasUAAAAAE6GASAnqWodakN_cfZuGcZENXVy"
                        onChange={(v) => this.changeVal('captcha', v)}
                    />
                </div>
                {
                    this.state.message.map((item, idx) => (
                        <Alert key={idx} variant={item.type}>
                            {item.text}
                        </Alert>
                    ))
                }
                <div class="justify-content-center d-flex"><button onClick={() => this.submit()} class="btn">ورود</button></div>
            </div>
        );
    }
}

export default connect(state => state)(Login);