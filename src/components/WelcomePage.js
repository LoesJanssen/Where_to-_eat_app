import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default class WelcomePage extends Component {
  eatAtRestaurantButton(event) {
    console.log(event);
    return <Link to="/eat-at-restaurant"></Link>;
  }

  // eatAtHomeButton() {
  //   return <Link to="/"></Link>;
  // }
  render() {
    return (
      <div>
        <Title content="Where to Eat" subtitle="The app that chooses for you" />
        <button>We are going to eat at home</button>
        <button onClick={this.eatAtRestaurantButton}>
          We are going to eat at a restaurant
        </button>
        <Link to="/eat-at-restaurant">Test Link Restaurant</Link>
      </div>
    );
  }
}
