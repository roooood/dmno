import React from 'react';
import { Link } from 'react-router-dom';
import Leftside from '../../component/Leftside';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="col-md-9 mb-3">
                        <div class="register panel">
                            <h1 class="text-right d-table-cell">افزایش اعتبار</h1>
                            <div class="float-left">
                                <Link className="nav-link" to="/"><button class="btn"><i class="fas fa-undo-alt"></i>صفحه اصلی</button></Link>
                            </div>
                            <div class="col-lg-10 mt-3">
                                <p class="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                <div class="charge">
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch8.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق بانک سامان <input type="radio" name="charge" value="ch8" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch1.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق پرفکت مانی <input type="radio" name="charge" value="ch1" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch2.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق ووچر پرفکت مانی  <input type="radio" name="charge" value="ch2" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch3.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق بیت کوین  <input type="radio" name="charge" value="ch3" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch4.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق اسکریل  <input type="radio" name="charge" value="ch4" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch5.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق پی پال  <input type="radio" name="charge" value="ch5" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch6.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق وبمانی <input type="radio" name="charge" value="ch6" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5"><img src={require("../../assets/img/ch7.png")} /></div>
                                            <div class="col-7">
                                                شارژ از طریق مانی‌گرام  <input type="radio" name="charge" value="ch7" />
                                            </div>
                                        </div>
                                    </div>
                                    <button class="btn float-left">مرحله بعدی</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Leftside />
                </div>
            </div>
        );
    }
}

export default Home;