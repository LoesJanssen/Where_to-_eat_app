import React, { Component } from "react";
import Logo_WTE from "./Logo_WTE.png";

export default class Title extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img
          src={Logo_WTE}
          alt="logo Where to Eat"
          style={{ height: "150px", width: "150px" }}
        />
        <h1>{this.props.content}</h1>
        <p> {this.props.subtitle}</p>
      </div>
    );
  }
}
