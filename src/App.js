import React, { useState } from "react";
import "./App.css";
import colorData from "./colors.json";
import ColorCard from "./ColorCard";

function App() {
  const [selectedPalette, setSelectedPalette] = useState(0);

  const handlePaletteChange = (index) => {
    setSelectedPalette(index);
  };

  const selectedPaletteData = colorData[selectedPalette];

  return (
    <div className="app">
      <h1>Serhii Vodianov <br/> Color Cards</h1>
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
