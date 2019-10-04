import React from 'react';
import Router from './Router.js'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderLoading() {
    return null;
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}


export default App;
