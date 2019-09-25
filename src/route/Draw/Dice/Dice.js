import React from 'react';
import './Dice.css';
const domino = [
  require('../../../assets/domino/0.png'),
  require('../../../assets/domino/1.png'),
  require('../../../assets/domino/2.png'),
  require('../../../assets/domino/3.png'),
  require('../../../assets/domino/4.png'),
  require('../../../assets/domino/5.png'),
  require('../../../assets/domino/6.png')
]
const dice = (props) => {
  const dices = [
    null,
    <div class="cara-1">
      <div class="punto"></div>
    </div>,
    <div class="cara-2">
      <div class="punto"></div>
      <div class="punto"></div>
    </div>,
    <div class="cara-3">
      <div class="punto"></div>
      <div class="punto"></div>
      <div class="punto"></div>
    </div>,
    <div class="cara-4">
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
    </div>,
    <div class="cara-5">
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
      <div class="punto medio"></div>
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
    </div>,
    <div class="cara-6">
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
      <div class="columna">
        <div class="punto"></div>
        <div class="punto"></div>
        <div class="punto"></div>
      </div>
    </div>
  ]

  let number = props.number;
  let cls = 'vertical' in props ? 'vertical' : '';
  return (
    <div className={"domino " + cls}>
      {props.isNull != true &&
        <img src={domino[number[0]]} />
      }
      {props.isNull != true &&
        <div draggable="false" className="domino-seperator" />
      }
      {props.isNull != true &&
        <img draggable="false" src={domino[number[1]]} />
      }
    </div>
  );
}

export default dice;