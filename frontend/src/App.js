import logo from './logo.svg';
import './App.css';


import React from 'react';

import Test from './Main/Test';

import { connect } from "react-redux";
import { HubConnectionBuilder } from '@microsoft/signalr';
import { getGlobalConnection } from "./Core/Global/global.selectors";
import { setConnection } from "./Core/Global/global.actions";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hubs/test')
      .withAutomaticReconnect()
      .build();

    connection.start()
      .then(result => {
        this.props.dispatch(setConnection(connection))

        connection.invoke("SendMessage", "test")

        connection.on("ReturnMessage", (msg) => { console.log(msg) })
      })


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { connection: getGlobalConnection(state) }
}

export default connect(mapStateToProps)(App);