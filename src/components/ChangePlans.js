import React, { Component } from "react";

export default class ChangePlans extends Component {
  fromHomeToRestaurant() {
    return <Link to="/eat-at-restaurant"></Link>;
  }

  //   fromRestaurantToHome() {
  //     return <Link to="/eat-at-home"></Link>;
  //   }

  fromRecipeToWelcomePage() {
    return <Link to="/"></Link>;
  }

  render() {
    return (
      <div>
        <button onClick={this.fromHomeToRestaurant}>I changed plans!</button>
      </div>
    );
  }
}
