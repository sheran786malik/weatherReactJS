import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LocationBox from './components/LocationBox/LocationBox';
import WeatherBox from './components/WeatherBox/WeatherBox';
import SearchBox from './components/SearchBox/SearchBox';
import WindBox from './components/WindBox/WindBox';
import InformationBox from './components/InformationBox/InformationBox';

import { useState} from 'react';


import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const API = '049909705e431bbafa807eb4a6840770';


  const searchLocation = (value) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API}`)
    .then((response) => {
      setWeatherData(response.data);
      console.log(response.data);
    })
    .catch((error) => console.log(error));
  }

 const handleEnterPress = (value) => {
  console.log(weatherData);
  searchLocation(value);
 }



  return (
    <div className="App">
      <Header text="Weather tracker" />
      <LocationBox location={weatherData?.name ?? "awaiting"} country={weatherData?.sys.country} comment={weatherData?.weather[0].description ?? "awaiting"} />

      <SearchBox onEnterPress={handleEnterPress}/>

      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <WeatherBox day="Monday" temperature="N/A" />
        <WeatherBox day="Tuesday" temperature="N/A" />
        <WeatherBox day="Wednesday" temperature="N/A" />
        <WeatherBox day="Thursday" temperature="N/A" />
        <WeatherBox day="Friday" temperature="N/A" />
        <WeatherBox day="Saturday" temperature="N/A" />
        <WeatherBox day="Sunday" temperature="N/A" />
      </div> */}

      <InformationBox data={weatherData}/>

      <p style={{ color: 'white', marginLeft: 80 }}>Visibility | {weatherData?.visibility}</p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <WindBox measurement="Wind Speed" value={weatherData?.wind?.speed ?? "awaiting..."} />
      <WindBox measurement="Wind Def" value={weatherData?.wind?.deg?? "awaiting..."} />
      </div>
    </div>
  );
}
export default App;
