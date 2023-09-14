import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [selectedColor, setSelectedColor] = useState("orange");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleSelectedColor = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div
      style={{
        border: "8px solid pink",
        padding: "10px",
        borderRadius: "15px",
        backgroundColor: "#fff",
      }}>
      <h1>Colorful Clock</h1>
      <h3>Selected color is:-{selectedColor}</h3>
      <h4>
        Pick a Color:=
        <select
          className="selectStyle"
          value={selectedColor}
          onChange={handleSelectedColor}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="brown">Brown</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
        </select>
      </h4>
      <h2 style={{ color: selectedColor }}>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
