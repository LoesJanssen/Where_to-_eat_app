import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RestaurantList from "./components/RestaurantList";
import EatHome from "./components/EatHome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/eat-at-restaurant" component={RestaurantList} />
          <Route exact path="/eat-at-home" component={EatHome} />
        </main>
      </header>
    </div>
  );
}

export default App;
