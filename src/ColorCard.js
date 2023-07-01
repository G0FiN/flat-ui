import React from "react";
import "./App.css";


const ColorCard = ({ name, color }) => {
    const handleCardClick = () => {
        // Save color to clipboard
        navigator.clipboard.writeText(color);
      
        // Play short sound
        // const audio = new Audio("./sound.mp3");
        // audio.play();
      
        // Add animation class to color card for one second
        const cardElement = document.getElementById(color);
        if (cardElement) {
          // Hide other color cards
          const colorCards = document.getElementsByClassName("color-card");
          Array.from(colorCards).forEach((card) => {
            if (card.id !== color) {
              card.style.display = "none";
            }
          });
      
          cardElement.classList.add("animate-color-card");
          setTimeout(() => {
            cardElement.classList.remove("animate-color-card");
            Array.from(colorCards).forEach((card) => {
              card.style.display = "block";
            });
          }, 2000);
        }
      };
      

  return (
    <div
      id={color}
      className="color-card"
      style={{ backgroundColor: color }}
      onClick={handleCardClick}
    >
      <h3>{name}</h3>
      <p>{color}</p>
    </div>
  );
};

export default ColorCard;
