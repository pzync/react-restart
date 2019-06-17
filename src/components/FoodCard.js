import React from "react";
import "./FoodCard.css";

const FoodCard = ({ cardData }) => {
  const { id, image, title, desc } = cardData;

  return (
    <div
      className="foodcard"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `cover`
      }}
    >
      <div className="details-container">
        <div className="details">
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
