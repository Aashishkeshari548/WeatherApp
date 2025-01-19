import { useState } from "react";

import SearchBox from "./SearchBox";
import CardBox from "./CardBox";
export default function WeatherApp() {
    let [weather , setWeather]=useState({ city: "London",
        feelsLike: 296.33,
        humidity: 36,
        temp: 296.95,
        tempMax: 296.95,
        tempMin: 296.95,
        weather: "clear sky",});
     
        function addnewInfo(newInfo){
            setWeather(newInfo)
        }

  return (
    <div>
      
      <br />
        <SearchBox addnewInfo={addnewInfo} />
        <br />
       <CardBox result={weather}/>
    </div>
  );
}
