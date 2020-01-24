import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default class WelcomePage extends Component {
  render() {
    return (
      <div>
        <Title content="Where to Eat" subtitle="The app that chooses for you" />
        <Link to="/eat-at-home">Eat at home</Link>{" "}
        <Link to="/eat-at-restaurant">Eat at restaurant</Link>
      </div>
    );
  }
}
