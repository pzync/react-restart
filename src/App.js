import React, { useState } from "react";
import "./App.css";
import FoodCard from "./components/FoodCard";

function App() {
  const [state, setState] = useState({
    foodItems: [
      {
        id: 0,
        image:
          "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1531&q=80",
        title: "Mac & Cheese",
        desc: "The Good Old Company"
      },
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        title: "Creamy Macarony",
        desc: "Epicurean Agenda"
      },
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
        title: "Fish Fillet Burger",
        desc: "River & Co"
      }
    ]
  });

  return (
    <div className="App">
      <h2>Your Cards</h2>

      {state.foodItems.map(foodItem => (
        <FoodCard cardData={foodItem} />
      ))}
    </div>
  );
}

export default App;
