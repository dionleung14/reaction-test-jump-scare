import React, { Component } from "react";

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
      let cd = setInterval(() => {
        this.setState({
          reaction: this.state.reaction - 1,
        });
      }, 1);
    };

    return (
      <button id="start" onClick={gameStart}>
        click me: {this.state.timer}
        reaction: {this.state.reaction}
      </button>
    );
  }
}
