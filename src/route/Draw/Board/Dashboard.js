
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Dice from '../Dice/Dice';
import * as F from '../../../library/Helper';
import autoBind from 'react-autobind';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.dices = [];
        this.force = false;
        this.mySit = this.props.mySit;
        this.number = null;
        this.dice = null;
        this.index = null;
        this.ui = null;
        this.turn = 0;

        autoBind(this);
    }
    myDice(dices) {
        this.dices = dices || [];
        this.reRender();
    }
    myTurn(sit) {
        this.turn = sit;
        this.reRender();
    }
    moveable(move) {
        this.reRender();
    }
    componentDidMount() {
        if ('Game' in this.props) {
            this.props.Game.register('dices', this.myDice);
            this.props.Game.register('turn', this.myTurn, true);
            this.props.Game.register('moveable', this.moveable, true);
        }
    }

    shouldComponentUpdate() {
        return this.force;
    }
    componentWillReceiveProps(nextProps) {
        // let f = F.clone(this.props.moveable), n = F.clone(nextProps.moveable);
        // if (!(f.length === n.length && f.sort().every((v, i) => v === n.sort()[i]))) {
        //     this.reRender();
        // }

        if (this.mySit == null && nextProps.mySit != null) {
            this.mySit = nextProps.mySit;
        }


    }
    revert() {

    }
    selected() {
        this.droped();
    }
    handleStart(dice, i) {
        this.dice = document.querySelector('.movable-dice' + i);
        this.number = dice;
        this.index = i;
        this.props.onStart(dice);
    }
    handleDrag(e, ui) {
        // this.props.onDrag()
    }
    handleStop(e, ui) {
        this.ui = ui;
        let x = Math.abs(ui.x);
        let y = Math.abs(ui.y);
        if (x < 2 && y < 2) {
            return;
        }
        if (y < 15) {
            this.dice.style.transform = 'translate(0px, 0px)';
            setTimeout(() => {
                this.reRender();
            }, 400);
            this.props.onStop();
        }
        else {
            this.droped();
        }

    }
    droped() {
        let el = this.dice;
        let dice = { number: this.number, index: this.index };

        let child = el.querySelector('.domino');
        let receiveable, target, distance, selected, max = 99999, receiving, domino, tmp;

        for (receiveable of this.props.receiveable) {
            tmp = document.querySelector('.list-dice' + receiveable[0]);
            domino = tmp.querySelector('.domino');
            distance = F.getDistance(el, domino);
            if (distance.distance < max) {
                max = distance.distance;
                selected = distance;
                receiving = receiveable;
                target = tmp;
            }
        }
        let swap = false;
        let x = (this.ui.x - selected.x), y = this.ui.y - selected.y, rotate = 0;

        let sign = target.getAttribute('sign')
        let index = target.getAttribute('index')
        let isReverse = target.classList.contains("reverse");
        let isVertical = target.classList.contains("vertical");

        let check = dice.number[isReverse ? 1 : 0];
        let isSame = dice.number[0] == dice.number[1];
        let move = (index > 0) ? 1 : 0;

        if (isVertical) {
            rotate = 90;
            if (isReverse) {
                if (this.props.moveable[move] == check) {
                    rotate = 90;
                    swap = true;
                }
                else {
                    rotate = -90;
                }
            } else {

                if (this.props.moveable[move] == check || isSame) {
                    rotate = 90;

                }
                else {
                    rotate = -90;
                    swap = true;
                }
            }
        }
        else if (isReverse) {
            if (this.props.moveable[move] == check) {
                rotate = 0;
                swap = true;
            }
            else {
                rotate = 180;
            }
        }
        else if (sign != 0) {
            if (this.props.moveable[move] == check) {
                rotate = 0;
            }
            else {
                rotate = 180;
                swap = true;
            }
        }

        if (swap) {
            [dice.number[0], dice.number[1]] = [dice.number[1], dice.number[0]];
        }

        child.style.transform = "rotate(" + (rotate - 90) + "deg)";
        el.style.transform = "translate(" + x + "px," + y + "px)";


        setTimeout(() => {
            this.props.Game.send({
                stack:
                    { number: dice.number, index: receiving[1] }
            });
            this.props.onStop(true);
        }, 500);


    }
    reRender() {
        this.force = true;
        this.forceUpdate();
    }
    render() {
        this.force = false;
        return (
            <div className="board-dashboard vertical">
                {this.dices.map((item, i) => {
                    let active = this.turn == this.mySit &&
                        (this.props.moveable.length > 0
                            ? item.some(k => this.props.moveable.includes(k))
                            : true
                        );
                    return (
                        <Draggable
                            key={Math.random()}
                            // allowAnyClick={true}
                            defaultPosition={{ x: 0, y: 0 }}
                            // bounds={{ bottom: 0, top: -450, left: -400, right: 300 }}
                            disabled={!active}
                            // onMouseDown={() => this.handleStart(item, i)}
                            onStart={() => this.handleStart(item, i)}
                            onDrag={this.handleDrag}
                            onStop={this.handleStop}>
                            <div number={item} className={"my-dice movable-dice" + i + ' ' + (active ? 'active' : '')} >
                                <Dice vertical={true} number={item} wanted={this.props.moveable} />
                            </div>
                        </Draggable>
                    )
                })}
            </div>
        );
    }
}

export default Dashboard;