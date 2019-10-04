import React, { Component } from 'react';
import Dice from '../Dice/Dice';
import autoBind from 'react-autobind';

let _table = {};
class Stack extends Component {
    constructor(props) {
        super(props);

        this.state = {
            load: false
        };
        autoBind(this);
    }
    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        this.onResize();
        this.props.Game.register('dices', this.myDice);
    }
    onResize() {
        let board = document.querySelector(".board-main");
        let domino = document.querySelector(".board-dashboard .domino");
        if (domino) {
            let _dice = {};
            _dice.width = domino.clientHeight > domino.clientWidth ? domino.clientHeight : domino.clientWidth;
            _dice.height = domino.clientHeight < domino.clientWidth ? domino.clientHeight : domino.clientWidth;
            _table = { width: board.clientWidth, height: board.clientHeight };
            this.setState({
                dice: _dice,
                top: (_table.height / 2) - (_dice.height / 2),
                left: (_table.width / 2),
                load: true
            });
        }
    }
    myDice() {
        setTimeout(() => {
            this.onResize();
        }, 500);
    }
    renderDice(i, number = null, index, isNull = false) {
        let clss = ['dice-holder', "list-dice" + i];
        let fade = this.props.type == 'add' ? 'fadeIn' : 'fadeOut';
        let width = this.state.dice.width, width2 = this.state.dice.height + 2, width4 = this.state.dice.width / 4;
        let vertical = false;
        let xleft, leftEnd, xright, rightEnd;
        let sign = 0;
        if (this.prevLevel == 0) {
            xleft = this.prevVertical ? this.prev + width4 : this.prev;
            leftEnd = xleft < width && this.prevSign < 0;
        }
        if (this.prevLevel == 1) {
            xleft = _table.width - (this.prev + width) + (this.prevVertical ? width4 : 0);
            leftEnd = xleft < width && this.prevSign > 0;
        }
        if (this.nextLevel == 0) {
            xright = _table.width - (this.next + width) + (this.nextVertical ? width4 : 0);
            rightEnd = xright < width && this.nextSign > 0;
        }
        if (this.nextLevel == 1) {
            xright = this.nextVertical ? this.next + width4 : this.next;
            rightEnd = xright < width && this.nextSign < 0;
        }
        let style = {};
        if (number.length == 2 && number[0] == number[1]) {
            vertical = true;
        }
        // else if (this.props.target[0] == this.props.target[1]) {
        //     vertical = true;
        // }
        if (vertical == true) {
            clss.push('vertical');
        }
        if (isNull === true) {
            clss.push(fade)
        }

        let left;
        let top = index < 0 ? this.top : this.down
        let track = [];
        if (index > 0) {
            track.push('p');
            sign = this.nextSign;
            if (this.nextVertical) {
                this.next += -this.nextSign * width4;
            }
            if (rightEnd) {
                track.push('R');
                track.push(this.nextLevel);
                if (this.nextLevel == 0) {
                    if (xright > width2) {
                        track.push('x');
                        top -= this.nextSign * 3;
                        left = this.next += this.nextSign * (width2);
                        this.down += width + 2;
                        this.next += this.nextSign * (this.nextVertical ? (width - width4) : (width + 4));
                    }
                    else {
                        track.push('t');
                        top += width2;
                        this.down += width + 4
                        left = this.next += this.nextVertical ? this.nextSign * width2 + 2 : 0;
                        this.next += this.nextVertical ? this.nextSign * (width4) : this.nextSign * (width2);
                    }
                    clss.push('vertical endright');
                }
                else if (this.nextLevel == 1) {
                    if (xright > width2) {
                        track.push('x');
                        this.down += width + 4;
                        left = this.next += this.nextSign * (width2 + 2);
                        this.next += this.nextSign * (this.nextVertical ? (width - width4) : (width + 4));
                    }
                    else {
                        track.push('t');
                        top += width2 + 2;
                        this.down += width + 4
                        left = this.next += this.nextVertical ? this.nextSign * width2 + 2 : 0;
                        this.next += this.nextSign * width2;
                    }
                    clss.push('vertical endxright');
                }
                this.nextLevel++;
                this.nextSign = -this.nextSign;
                vertical = true;
            }
            else {
                track.push('r');
                if (vertical) {
                    track.push('v');
                    track.push(this.nextLevel);
                    this.next += -this.nextSign * width4;
                    if (this.nextLevel == 1) {
                        if (this.next - width4 < 0 || this.next + width4 > _table.width) {
                            track.push('z');
                            this.next += this.nextSign * (width2 + 2);
                        }
                    }
                    else if (this.nextLevel == 2) {
                        if (this.next + width < 0 || this.next - width > _table.width) {
                            track.push('z');
                            this.next += this.nextSign * (width2 + 2);
                        }
                    }
                }
                left = this.next += this.nextSign * (width + 4);
                this.nextVertical = vertical;
            }

        }
        else if (index < 0) {
            track.push('n');
            sign = this.prevSign;
            if (this.prevVertical) {
                this.prev += -this.prevSign * width4;
            }
            if (leftEnd) {
                track.push('L');
                track.push(this.prevLevel);
                if (this.prevLevel == 0) {
                    if (xleft > width2) {
                        track.push('x');
                        top -= this.prevSign * 3;
                        this.top -= width;
                        left = this.prev += this.prevSign * (width2 + 2);
                        this.prev += this.prevSign * (this.prevVertical ? (width - width4) : (width + 4));
                    }
                    else {
                        track.push('d');
                        top -= width2;
                        this.top -= width + 4
                        left = this.prev += this.prevVertical ? this.prevSign * width2 + 2 : 0;
                        this.prev += this.prevSign * width2;
                    }
                    clss.push('vertical endleft reverse');
                }
                else if (this.prevLevel == 1) {
                    if (xleft > width2) {
                        track.push('x');
                        this.top -= width + 4;
                        left = this.prev += this.prevSign * (width2 + 2);
                        this.prev += this.prevSign * (this.prevVertical ? (width - width4) : (width + 4));
                    }
                    else {
                        track.push('d');
                        top -= width2 + 2;
                        this.top -= width + 4
                        left = this.prev += this.prevVertical ? this.prevSign * width2 + 2 : 0;
                        this.prev += this.prevVertical ? this.prevSign * (width4) : this.prevSign * (width2);
                    }
                    clss.push('vertical endxleft reverse');
                }
                this.prevLevel++;
                this.prevSign = -this.prevSign;
                vertical = true;
            }
            else {
                track.push('r');
                if (vertical) {
                    track.push('v');
                    track.push(this.nextLevel);
                    this.prev += -this.prevSign * width4;
                    if (this.prevLevel == 1) {
                        if (this.prev + width < 20 || this.prev - (width + 20) > _table.width) {
                            this.prev += this.prevSign * (width2 + 2);
                            track.push('z');
                        }
                    }
                    if (this.prevLevel == 2) {
                        if (this.prev - width4 < 0 || this.prev + width4 > _table.width) {
                            this.prev += this.prevSign * (width2 + 2);
                            track.push('z');
                        }
                    }
                }
                top -= this.prevSign * 3;
                left = this.prev += this.prevSign * (width + 4);
                this.prevVertical = vertical;
            }

        }
        else {
            left = this.prev = (this.next -= (width / 2));
            if (vertical) {
                this.prevVertical = true;
                this.nextVertical = true;
            }
        }

        style.left = left;
        style.top = top;
        if (sign < 0 && !vertical) {
            clss.push('reverse')
        }
        clss.push(track.join(''))
        console.log('====================================');
        console.log(track.join(''));
        console.log('====================================');
        return (
            <div
                key={i}
                sign={sign}
                index={index}
                number={number}
                onClick={() => isNull == true ? this.props.onSelect(i) : null}
                className={clss.join(' ')}
                style={style}
            >
                <Dice number={number} isNull={isNull} />
            </div >
        )
    }
    componentWillReceiveProps(nextProps, prevState) {

    }
    map() {
        let rendred = [], item, i = 0;
        for (item of this.props.dice) {
            rendred.push(this.renderDice(i, item.number, item.index, item.isNull));
            i++;
        }
        return rendred;
    }
    render() {
        this.prev = this.state.left;
        this.next = this.state.left;
        this.top = this.state.top + 4;
        this.down = this.state.top + 4;
        this.prevVertical = false;
        this.nextVertical = false;
        this.nextSign = +1;
        this.prevSign = -1;
        this.nextLevel = 0;
        this.prevLevel = 0;
        return (
            <div className="board-main">
                {this.state.load
                    ? this.map()
                    : null
                }
            </div>
        );
    }
}

export default Stack;