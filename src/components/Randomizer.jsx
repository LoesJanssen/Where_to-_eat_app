import React, { Component } from "react";

export default class Randomizer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button>Give me my restaurant!</button>
      </div>
    );
  }
}
