import React, { Component } from "react";

export default class RestaurantList extends Component {
  state = {
    restaurant: {},
    loading: false
  };

  getRandomRestaurant = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=london`,
      {
        headers: {
          "user-key": "79e38a122e3f7d6be88f6cdf03ee98e9"
        }
      }
    )
      .then(response => response.json())
      .then(myJson => {
        const randomPick = Math.trunc(Math.random() * 20);
        const firstRestaurant = myJson.restaurants[randomPick].restaurant;
        this.setState({
          restaurant: {
            name: firstRestaurant.name,
            url: firstRestaurant.url,
            location: firstRestaurant.location
          }
        });
      });
  };

  render() {
    console.log(this.state.restaurant);
    return (
      <div>
        <button onClick={this.getRandomRestaurant}>Get me a restaurant</button>
      </div>
    );
  }
}
