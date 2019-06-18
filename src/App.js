import React, { useState, useEffect } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import AppHeader from "./components/AppHeader";

const API_KEY = `38348c8d8e6066fe42fcd7fb4a2375bc`;

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=banana&count=3`
      );
      const data = await response.json();
      setState(data.recipes);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className="card-container">
        {state.map(foodItem => (
          <div
            key={foodItem.recipe_id}
            className="single-card"
            style={{
              zIndex: `${100 - state.indexOf(foodItem)}`,
              top: `${-30 * state.indexOf(foodItem)}px`,
              transform: `scale(${1 - 0.1 * state.indexOf(foodItem)})`,
              opacity: `${1 - 0.3 * state.indexOf(foodItem)}`
            }}
          >
            <FoodCard cardData={foodItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
