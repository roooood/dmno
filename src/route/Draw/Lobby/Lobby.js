import React, { Component } from 'react';
import Create from './Create';

class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.userKey = window.location.pathname.replace('/', '') || 1;
        this.getTableList = this.getTableList.bind(this);
    }
    componentDidMount() {
        if (this.props.Game.isConnect) {
            this.getTableList();
        } else {
            this.props.Game.connect(() => {
                this.getTableList();
            });
        }
    }
    joinTable(id) {
        this.props.Game.join(id, { key: this.userKey });
    }
    getTableList() {
        this.props.Game.getAvailableRooms((rooms) => {
            this.setState({ rooms });
            this.counter++;
            if (this.counter > this.limit) {
                this.counter = 0;
            }
            else {
                setTimeout(() => {
                    this.getTableList();
                }, 5000)
            }
        });
    }
    render() {
        return (
            <div class="container">
                <Create key={this.userKey} Game={this.props.Game} ref={(ref) => this.create = ref} />
                <div class="panel">
                    <div class="row">
                        <div class="col-md-9">
                            <h1 class="text-right d-table-cell">میزهای بازی DRAW</h1>
                            <div class="float-left">
                                <button class="btn ticket-btn" onClick={() => this.create.show()}><i class="fas fa-plus"></i>ایجاد میز</button>
                                <button class="btn"><i class="fas fa-undo-alt"></i>صفحه اصلی</button>
                            </div>

                            <div class="nav filter">
                                <div class="nav-link">نمایش بر اساس :</div>
                                <div class="nav-link">
                                    پاداش میز
                        <select name="" id="miz">
                                        <option value="">کمتر از 1000</option>
                                        <option value="">1000 تا 5000</option>
                                        <option value="">5000 تا 10.000</option>
                                        <option value="">10.000 تا 20.000</option>
                                        <option value="">بیشتر از 20.000</option>
                                    </select>
                                </div>
                                <div class="nav-link">وضعیت
                        <select name="" id="">
                                        <option value="">در حال انتظار</option>
                                        <option value="">در حال بازی</option>
                                    </select>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <td>نام میز</td>
                                            <td>پاداش میز</td>
                                            <td>راند</td>
                                            <td>بازیکنان</td>
                                            <td>وضعیت بازی</td>
                                            <td>آیکون وضعیت</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.rooms.map(room => {
                                            return (
                                                <tr onClick={() => this.joinTable(room.roomId)}>
                                                    <td>{room.metadata.name}</td>
                                                    <td>{room.metadata.bet}<i class="fas fa-coins pr-2"></i></td>
                                                    <td>{room.metadata.point}</td>
                                                    <td>{room.metadata.ready == 2 ? room.metadata.p1 + ' , ' + room.metadata.p1 : room.metadata.p1}</td>
                                                    <td>{room.metadata.ready == 2 ? 'در حال بازی' : 'در حال انتظار'}</td>
                                                    <td>{room.metadata.ready == 2 ? <i class="fas fa-play"></i> : <i class="fas fa-spinner waiting"></i>}</td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3 mt-5">
                            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#playing" role="tab">در حال بازی</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#waiting" role="tab">در حال انتظار</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="playing" role="tabpanel">
                                    <ul>
                                        <li>
                                            10.000<i class="fas fa-coins pr-2"></i>
                                            <p>تاپ هیرو و یار دبستانی در حال بازی</p>
                                        </li>

                                    </ul>
                                    <button class="btn">بازیکن آنلاین<br />256</button>
                                </div>
                                <div class="tab-pane fade" id="waiting" aria-labelledby="profile-tab">
                                    <ul>
                                        <li>
                                            10.000<i class="fas fa-coins pr-2"></i>
                                            <p>تاپ هیرو و یار دبستانی در حال انتظار</p>
                                        </li>

                                    </ul>
                                    <button class="btn">بازیکن آنلاین<br />256</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Lobby;
