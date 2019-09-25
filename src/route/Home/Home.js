import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Leftside from '../../component/Leftside';
import 'swiper/dist/css/swiper.min.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            speed: 600,
            loop: true,
            parallax: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mb-3">
                        <div className="swiper-container">
                            <div className="parallax-bg" data-swiper-parallax="-15%"></div>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="caption">
                                        <h1 className="title" data-swiper-parallax="-500">Slide 1</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="caption">
                                        <h1 className="title" data-swiper-parallax="-500" data-swiper-parallax-opacity="0">Slide 2</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="caption">
                                        <h1 className="title" data-swiper-parallax="-500">Slide 3</h1>
                                        <div className="text" data-swiper-parallax="-100">
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#games" role="tab">بیشترین بازی</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#win" role="tab">بیشترین برد</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#loss" role="tab">بیشترین باخت</a>
                                    </li>
                                </ul>
                                <div className="tab-content content-players" id="myTabContent">
                                    <div className="tab-pane fade show active" id="games" role="tabpanel">
                                        <div className="player">
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="win" role="tabpanel">
                                        <div className="player">
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="loss" role="tabpanel">
                                        <div className="player">
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                            <a href="">نام کاربری</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 mb-3">
                                <div className="start mb-2">
                                    <img src={require("../../assets/img/img003.png")} alt="" className="w-100 h-auto" />
                                    <Link to="/draw" className="btn"><i className="fas fa-play"></i>شروع بازی</Link>
                                </div>
                                <div className="start">
                                    <img src={require("../../assets/img/img002.png")} alt="" className="w-100 h-auto" />
                                    <button className="btn"><i className="fas fa-play"></i>شروع بازی</button>
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