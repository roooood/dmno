
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Login from '../route/Sign/Login';
import { connect } from 'react-redux';
import { User } from '../redux/action/user';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { login: false };
    }
    show() {
        this.setState({ login: true })
    }
    logout() {
        this.props.dispatch(User(null));
    }
    hide() {
        this.setState({ login: false })
    }
    render() {
        return (
            <div className="the-header">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href=""><i className="fas fa-headset pl-1"></i>پشتیبانی</a>
                                <a href=""><i className="far fa-question-circle pl-1"></i>سوالات متداول</a>
                                <a href=""><i className="fas fa-life-ring pl-1"></i>راهنما</a>
                            </div>
                            <div className="col-md-6 text-left social-top ml-0">
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-telegram-plane"></i></a>
                                <a href=""><i className="fab fa-whatsapp"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="logo">
                    <div className="img-logo">
                        <a href="">
                            <img src={require('../assets/img/logo.png')} alt="" className="img-fluid" />
                        </a>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <button onclick="openNav()" className="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="navbar-collapse" id="mobile-menu">
                            <ul className="navbar-nav">
                                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/"><i className="fas fa-home"></i>صفحه نخست<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/a"><i className="fas fa-credit-card"></i>پرداخت آنلاین</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                        <i className="fas fa-money-bill"></i>مدیریت مالی
                                        </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Link 1</a>
                                        <a className="dropdown-item" href="#">Link 2</a>
                                        <a className="dropdown-item" href="#">Link 3</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-phone"></i>ارتباط با ما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-envelope-open"></i>دعوت بازیکن</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-question-circle"></i>راهنما</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fas fa-newspaper"></i>آخرین اخبار</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-auto ml-0 pl-2">
                            {!this.props.user.isLogin &&
                                <button className="btn" onClick={() => this.show()}>ثبت نام / ورود</button>
                            }
                            {this.props.user.isLogin &&
                                <button className="btn" onClick={() => this.logout()}>خروج</button>
                            }
                        </div>
                    </div>
                </nav>
                <Modal id="login" onHide={() => this.hide()} class="modal fade animated zoomIn mt-4" show={this.state.login} >
                    <div class="modal-header">ورود به حساب کاربری</div>
                    <div class="modal-body">
                        <Login />
                        <hr />
                        <div class="row">
                            <div class="col-8">
                                <p>نمی توانید وارد شوید؟<a href=""> فراموشی رمز عبور </a></p>
                                <p>حساب کاربری ندارید؟ همین حالا<Link to='/register' onClick={() => this.hide()}> عضو </Link>شوید</p>
                            </div>
                            <div class="col-4 justify-content-end d-flex"><button class="btn close"
                                onClick={() => this.hide()}>بستن</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(state => state)(Header);