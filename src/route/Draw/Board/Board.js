import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Stack from './Stack';
import Pick from './Pick';
import * as F from '../../../library/Helper';
import autoBind from 'react-autobind';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'add',
            emptyDice: [],
            mySit: null,
        };
        this.user = this.props.state.info;
        autoBind(this);

    }
    componentWillReceiveProps(nextProps, prevState) {
        if (this.state.mySit == null) {
            for (let i in nextProps.state.players) {
                let j = nextProps.state.players[i];
                if (j.id == this.user.id) {
                    this.state.mySit = j.sit;
                }
            }
        }
    }
    componentDidMount() {
    }
    insertToDice(dice) {
        let receiveable = [];
        this.setState({ type: 'add', emptyDice: [...this.state.emptyDice, ...dice] }, () => {
            for (let i = 0; i < dice.length; i++) {
                let target = this.props.state.stack.length + i;
                let index = dice[i].index;
                receiveable.push([target, index]);
            }
            this.setState({ receiveable })
        });

    }
    handleStart(dice) {
        let empty = [];
        this.setState({ type: 'remove', emptyDice: [] }, () => {
            let len = this.props.state.stack.length;
            if (len > 0) {
                if (dice.includes(this.props.state.moveable[0])) {
                    empty.push({ number: dice, index: -1, isNull: true })
                }
                if (dice.includes(this.props.state.moveable[1])) {
                    empty.push({ number: dice, index: 1, isNull: true })
                }
            }
            else {
                empty.push({ number: dice, index: 0, isNull: true })
            }
            this.insertToDice(empty);
        })
    }
    handleDrag(e, ui) {

    }
    onSelect(i) {
        for (let r of this.state.receiveable) {
            if (r[0] == i) {
                this.setState({ receiveable: [r] });
                break;
            }
        }
        this.dashboard.selected();
    }
    handleStop(success = false) {
        if (success)
            this.state.emptyDice = [];
        else
            this.setState({ type: 'remove', emptyDice: [] })
    }

    render() {
        const { state } = this.props;
        return (
            <div class="game-responsive">
                <Pick
                    simi={this.props.state.simi}
                    Game={this.props.Game} />
                <div class="container">
                    <div class="game">
                        <div class="row">
                            <div class="col-md-2 pl-1 pr-3">
                                <div class="dashboard">
                                    <div class="nav flex-column">
                                        <div class="nav-link">
                                            نام میز
                                        <p>{state.table.name || ''}</p>
                                        </div>
                                        <div class="nav-link">
                                            پاداش برد
                                        <p>{F.toMoney(state.table.bet || '')}<i class="fas fa-coins pr-2"></i></p>
                                        </div>
                                        <div class="nav-link">
                                            راند
                                        <p>{state.table.point || ''}</p>
                                        </div>
                                        <div class="nav-link">
                                            پورسانت
                                        <p>5%<i class="fas fa-coins pr-2"></i></p>
                                        </div>
                                        <div class="nav-link">
                                            <img src={require("../../../assets/img/female.jpg")} />
                                            <p>{'1' in state.players ? state.players['1'].name : '-'}</p>
                                            <p>VS</p>
                                            <img src={require("../../../assets/img/male.jpg")} />
                                            <p>{'2' in state.players ? state.players['2'].name : '-'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-10 col-12 pr-0">
                                <div class="float-right">
                                    <img src={require("../../../assets/img/table-number.png")} />
                                    <h2>{state.table.name}</h2>
                                </div>
                                <div class="float-left">
                                    <button class="btn"><i class="fas fa-undo-alt"></i>صفحه میزها</button>
                                    <button class="btn"><i class="fas fa-undo-alt"></i>صفحه اصلی</button>
                                </div>
                                <div id="game-menu">
                                    <div class="dashboard">
                                        <div class="nav-link">
                                            پاداش برد
                                        <p>{F.toMoney(state.table.bet)}<i class="fas fa-coins pr-2"></i></p>
                                        </div>
                                        <div class="nav-link">
                                            راند
                                        <p>{state.table.point}</p>
                                        </div>
                                        <div class="nav-link">
                                            پورسانت
                                        <p>5%<i class="fas fa-coins pr-2"></i></p>
                                        </div>
                                        <div>
                                            <button class="btn"><i class="fas fa-undo-alt"></i>صفحه میزها</button>
                                            <button class="btn"><i class="fas fa-undo-alt"></i>صفحه اصلی</button>
                                        </div>
                                        <div class="users">
                                            <div class="user">
                                                <img src={require("../../../assets/img/female.jpg")} />
                                                <p>{'1' in state.players ? state.players['1'].name : '-'}</p>
                                            </div>
                                            <span>VS</span>
                                            <div class="user">
                                                <img src={require("../../../assets/img/male.jpg")} />
                                                <p>{'2' in state.players ? state.players['2'].name : '-'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="board">
                                    <div>
                                        <img src={require("../../../assets/img/table.png")} class="background" />
                                        <Stack
                                            type={this.state.type}
                                            Game={this.props.Game}
                                            onSelect={this.onSelect}
                                            dice={[...this.props.state.stack, ...this.state.emptyDice]} />
                                        <Dashboard
                                            ref={ref => this.dashboard = ref}
                                            mySit={this.state.mySit}
                                            Game={this.props.Game}
                                            receiveable={this.state.receiveable}
                                            moveable={this.props.state.moveable}
                                            onStart={this.handleStart}
                                            // onDrag={this.handleDrag}
                                            onStop={this.handleStop} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;