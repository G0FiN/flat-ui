import React, { useState } from "react";
import "./App.css";
import colorData from "./colors.json";

const ColorCard = ({ name, color }) => (
  <div className="color-card" style={{ backgroundColor: color }}>
    <h3>{name}</h3>
    <p>{color}</p>
  </div>
);

function App() {
  const [selectedPalette, setSelectedPalette] = useState(0);

  const handlePaletteChange = (index) => {
    setSelectedPalette(index);
  };

  const selectedPaletteData = colorData[selectedPalette];

  return (
    <div className="app">
      <h1>Color Cards</h1>
      <div className="palette-buttons">
        {colorData.map((palette, index) => (
          <button
            key={palette.id}
            className={selectedPalette === index ? "active" : ""}
            onClick={() => handlePaletteChange(index)}
          >
            <span className="emoji">{palette.emoji}</span>
            <span className="palette-name">
              {selectedPalette === index ? palette.paletteName : null}
            </span>
          </button>
        ))}
      </div>
      <div className="color-cards">
        {selectedPaletteData.colors.map((color) => (
          <ColorCard key={color.name} name={color.name} color={color.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
