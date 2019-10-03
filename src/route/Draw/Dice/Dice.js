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
  let number = props.number;
  let cls = 'vertical' in props ? 'vertical' : '';
  return (
    <div className={"domino " + cls}>
      {props.isNull != true &&
        <>
          <img src={domino[number[0]]} />
          <div draggable="false" className="domino-seperator" />
          <img draggable="false" src={domino[number[1]]} />
          <div className="domino-fill" />
        </>
      }
    </div>
  );
}

export default dice;