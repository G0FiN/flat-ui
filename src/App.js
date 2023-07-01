import "./App.css";
import colorData from './colors.json';

const ColorCard = ({ name, color }) => (
  <div className="color-card" style={{ backgroundColor: color }}>
    <h3>{name}</h3>
    <p>{color}</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Color Cards</h1>
      <div className="color-cards">
        {colorData.colors.map((color) => (
          <ColorCard key={color.name} name={color.name} color={color.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
