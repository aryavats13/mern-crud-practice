import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleFetchWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data.weather);
      console.log(weather)
    } catch (err) {
      console.error(err);
      setWeather(null);
      alert("Failed to fetch weather");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', border: "2px solid rgba(204, 204, 204, 1)",padding:'80px' }}>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Get Weather</button>

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
