import React, { Component } from "react";
import Board from "./Board";
import Cell from "./Cell";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Board />
        <audio data-key="76" src="../sounds/tink.wav"></audio>
      </div>
    );
  }
}

export default App;
