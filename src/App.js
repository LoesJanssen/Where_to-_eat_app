import React from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Title
            content="Where to Eat"
            subtitle="The app that makes it easy to pick a restaurant!"
          />
        </main>
      </header>
    </div>
  );
}

export default App;
