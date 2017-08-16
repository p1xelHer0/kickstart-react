import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader
          welcome="Agero"
          date={new Date(Date.now()).toLocaleString()}
        />
        <AppIntro />
      </div>
    );
  }
}

const AppHeader = props =>
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to {props.welcome},the current date is {props.date}</h2>
  </div>;

const AppIntro = () =>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>;

export default App;
