import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

export default class EatHome extends Component {
  state = {
    recipes: [],
    loading: false
  };

  getRandomRecipe = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then(response => response.json())
      .then(myJson => {
        const recipesList = myJson.meals;

        // Shuffle array
        const shuffled = recipesList.sort(() => 0.5 - Math.random());

        // Get sub-array of first n elements after shuffled
        const selected = shuffled.slice(0, 5);

        this.setState({
          recipes: selected,
          loading: true
        });
        console.log(this.state.recipes);
      });
  };

  render() {
    const recipes = this.state.recipes;
    return (
      <div>
        <Title content="What to Eat" subtitle="Let us choose your recipe" />

        <button onClick={this.getRandomRecipe}>Get me a recipe!</button>

        <ul>
          {recipes.map(r => (
            <li key={r.idMeal}>{r.strMeal}</li>
          ))}
        </ul>
      </div>
    );
  }
}
