import React from "react";
import soundFile from "./sound.mp3";
import "./App.css";


const ColorCard = ({ name, color }) => {
    const handleCardClick = () => {
        navigator.clipboard.writeText(color);
      
        const audio = new Audio(soundFile);
        audio.play();
      
        const cardElement = document.getElementById(color);
        if (cardElement) {
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
