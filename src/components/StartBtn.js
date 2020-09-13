import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTimer } from "../actions";

// const setTime = useSelector((state) => state.setTimer);
export default class StartBtn extends Component {
  state = {
    timer: 0,
    countdown: 5000,
    reaction: 0,
  };
  render() {
    const gameStart = () => {
      this.setState({
        timer: 2000,
      });
      setTimeout(() => {
        console.log("delay");
      }, this.state.countdown);
      setInterval(() => {
        this.setState({
          reaction: this.state.reaction - 1,
        });
      }, 1);
    };

    return (
      <div>
        <button id="start" onClick={gameStart}>
          click me: {this.state.timer}
          <br />
          reaction: {this.state.reaction}
        </button>
        <button>stop reaction</button>
      </div>
    );
  }
}
