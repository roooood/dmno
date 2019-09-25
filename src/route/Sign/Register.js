import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Leftside from '../../component/Leftside';
import request from '../../component/Fetch';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import setUserData from '../../redux/action/user';
let input = {
    name: 'نام',
    family: 'نام خانوادگی',
    email: 'ایمیل',
    phone: 'شماره تماس',
    username: 'نام کاربری',
    password: 'کلمه عبور',
    captcha: 'کپچا'
}
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: 'siavash',
                family: 'unesi',
                email: '30avash@gmail.com',
                phone: '09350634343',
                username: 'siavasham',
                password: 'qazwsx',
                repass: 'qazwsx',
                captcha: null,
            },
            message: [],
        };
    }
    componentDidMount() {
        //this.props.dispatch(setUserData({ token: 'route' }))
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
        if (this.state.form.password != this.state.form.repass) {
            message.push({ type: 'warning', text: 'پسورد با تکرار مطابقت ندارد' })
        }
        if (message.length > 0) {
            this.setState({ message })
            // return;
        }
        request('user/add', this.state.form, data => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            let message = [];
            if (data.success) {
                message.push({ type: 'success', text: 'ثبت نام با موفقیت انجام شد' })
            } else {
                for (let i in data.errors) {
                    message.push({ type: 'danger', text: input[i] + ' - ' + data.errors[i].join(' , ') })
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
            <div class="container">
                <div class="row">
                    <div class="col-md-9 mb-3">
                        <div class="register">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <div class="col-md-10 col-12 mx-auto">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">نام</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('name', v)} value={this.state.form.name} type="text" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">نام خانوادگی</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('family', v)} value={this.state.form.family} type="text" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">نام کاربری</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('username', v)} value={this.state.form.username} type="text" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">آدرس ایمیل</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('email', v)} value={this.state.form.email} type="text" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">شماره همراه</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('phone', v)} value={this.state.form.phone} type="text" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">کلمه عبور</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('password', v)} value={this.state.form.password} type="password" class="form-control" />
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">تکرار کلمه عبور</span>
                                    </div>
                                    <input onChange={(v) => this.changeVal('repass', v)} value={this.state.form.repass} type="password" class="form-control" />
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


                                <button onClick={() => this.submit()} class="btn w-100">ثبت نام</button>
                            </div>
                        </div>
                    </div>
                    <Leftside />
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Register);