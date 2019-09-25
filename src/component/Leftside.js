import React, { Component } from 'react';

class Leftside extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="col-md-3 mb-3">
                <div className="video">
                    <img src={require("../assets/img/domino-baner-2.png")} alt="" className="img-fluid" />
                    <div data-toggle="modal" data-target="#video1"><i className="fas fa-play"></i></div>
                </div>
                <div className="video">
                    <img src={require("../assets/img/domino-baner-1.png")} alt="" className="img-fluid" />
                    <div data-toggle="modal" data-target="#video2"><i className="fas fa-play"></i></div>
                </div>
                <img src={require("../assets/img/clock.jpg")} alt="" className="clock" />
                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#news" role="tab">اطلاعیه ها</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#players" role="tab">بازیکنان آنلاین</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="news" role="tabpanel">
                        <div className="row">
                            <div className="col-3 mb-3 px-1"><img src={require("../assets/img/news.jpg")} alt="" /></div>
                            <div className="col-9 mb-3 px-1">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            </div>
                            <div className="col-3 mb-3 px-1"><img src={require("../assets/img/news.jpg")} alt="" /></div>
                            <div className="col-9 mb-3 px-1">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            </div>
                            <div className="col-3 mb-3 px-1"><img src={require("../assets/img/news.jpg")} alt="" /></div>
                            <div className="col-9 mb-3 px-1">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            </div>
                            <div className="col-3 px-1"><img src={require("../assets/img/news.jpg")} alt="" /></div>
                            <div className="col-9 px-1">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="players" aria-labelledby="profile-tab">
                        <div className="row">
                            <div className="col-3 px-1 mb-3"><img src={require("../assets/img/female.jpg")} alt="" /></div>
                            <div className="col-9 px-1 mb-3">
                                <p>نام کاربری</p>
                            </div>
                            <div className="col-3 px-1 mb-3"><img src={require("../assets/img/female.jpg")} alt="" /></div>
                            <div className="col-9 px-1 mb-3">
                                <p>نام کاربری</p>
                            </div>
                            <div className="col-3 px-1"><img src={require("../assets/img/male.jpg")} alt="" /></div>
                            <div className="col-9 px-1">
                                <p>نام کاربری</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Leftside;