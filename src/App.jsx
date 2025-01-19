import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <h2>WeatherApp </h2>
      <WeatherApp />
     
    </>
  );
}

export default App;
