import React from "react";
import "./card.scss";
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">Front Content</div>
        <div className="back">Back Content</div>
      </div>
    </div>
  );
};

export default Card;
