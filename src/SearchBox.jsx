import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ addnewInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0a8b3eecd129948878386c30da10681e";

  async function getWeatherInfo() {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (error) {
      throw error;
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  async function submitHandle(event) {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      const result = await getWeatherInfo();
      addnewInfo(result);
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className="search-box">
      <form onSubmit={submitHandle}>
        <TextField
          id="searchBox"
          label="search City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
        {error && <p>No such place exist;</p>}
      </form>
    </div>
  );
}
