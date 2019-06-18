import React, { useState, useEffect } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";
import AppHeader from "./components/AppHeader";

const API_KEY = `22bb85986e161bafa350f51ba4c4c0a4`;

const useAPI = (searchTerm, count) => {
  const [apidata, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}&count=${count}`
      );
      const data = await response.json();
      setApiData(data.recipes);
    };
    fetchData();
  }, [searchTerm, count]);
  /* Reference for this https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects */

  return apidata;
};

function App() {
  const state = useAPI(`cheese`, 4);

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
