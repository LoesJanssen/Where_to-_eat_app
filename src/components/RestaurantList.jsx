import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

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
            url: firstRestaurant.url
          }
        });
        console.log(this.state.restaurant);
        return this.state.restaurant;
      });
  };

  render() {
    return (
      <div>
        <Title
          content="Where to Eat"
          subtitle="Let us choose your restaurant"
        />

        {/* <Link to="/">Back home</Link> */}
        <button onClick={this.getRandomRestaurant}>Get me a restaurant!</button>
        <p>{this.state.restaurant.name}</p>
        {this.state.restaurant.url && (
          <a
            href={this.state.restaurant.url}
            style={{ display: "table-cell" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Go to website of your restaurant!{" "}
          </a>
        )}
      </div>
    );
  }
}
