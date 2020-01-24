import React, { Component } from "react";
import { link } from "react-router-dom";
import Title from "./Title";

export default class Recipe extends Component {
  state = {
    meal: null
  };
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(response => response.json())
      .then(json => {
        const meal = json.meals.find(meal => {
          return this.props.match.params.parameter === meal.strMeal;
        });

        console.log("DINNER TIME??", meal);
        this.setState({ meal: meal });
      });
  }

  render() {
    console.log("WHAT ARE OUR PROPS", this.props);
    console.log("WHAT IS OUR STATE", this.state);
    if (this.state.meal === null) return <h1>Wait for it!</h1>;
    return (
      <div>
        <Title content="Recipe" />
        <h1>{this.state.meal.strMeal}</h1>
        <img src={this.state.meal.strMealThumb} alt="food" />
        <p>{this.state.meal.strInstructions}</p>
      </div>
    );
  }
}

/*

  What do we have:
  - props in this a component with the name of the meal

  What we want:
  - Instructions for that meal

  How are we going to get it
  X Fetch all the data
  X find the meal using the name of the meal
  X put this in this in the state
  X display

*/
