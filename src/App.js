import React from "react";
import "./App.css";
import Title from "./components/Title";
import Randomizer from "./components/Randomizer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Title
            content="Where to Eat"
            subtitle="The app that makes it easy to pick a restaurant!"
          />
          <Randomizer />
        </main>
      </header>
    </div>
  );
}

export default App;
