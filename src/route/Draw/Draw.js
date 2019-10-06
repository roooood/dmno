import React from 'react';
import Game from './Game';
import Board from './Board/Board';
import Lobby from './Lobby/Lobby';
import autoBind from 'react-autobind';

import './Draw.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'lobby',
      started: false,
      players: {},
      stack: [],
      moveable: [],
      simi: [],
    };
    this.limit = 10;
    autoBind(this);

  }
  gotoTable(data) {
    this.setState(data);
    Game.onState((state) => {
      this.setState(state);
    });
    this.setState({ route: 'game' })
  }
  componentDidMount() {
    Game.reset();
    Game.register('welcome', this.gotoTable);
    Game.register('leave', this.gotoLobby);
  }
  gotoLobby() {
    this.setState({ route: 'lobby' })
  }
  render() {
    if (this.state.route == 'lobby')
      return (
        <Lobby
          Game={Game}
        />
      )
    else
      return (
        <Board
          state={{
            setting: {},
            ...this.state,
            // table: {},
            // stack: [{ number: [1, 2], index: 0 }, { number: [2, 3], index: 1 }]
          }}
          Game={Game}
        />
      );
  }
}


export default App;
