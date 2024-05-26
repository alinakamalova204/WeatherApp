import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import WeatherDisplay from './components/WeatherDisplay';
import './styles.css';

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    try {
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error: any) {
      setError('Failed to fetch weather data. Please try again.');
      setWeather(null);
    }
  };

  return (
      <div className="outer-container">
        <div className="inner-container">
          <h1>Weather App</h1>
          <CitySearch onSearch={handleSearch} />
          {error && <div>Error: {error}</div>}
          {weather?.main && weather?.weather && weather?.name &&  (
              <WeatherDisplay
                  temperature={weather.main.temp}
                  description={weather.weather[0].description}
                  wind={weather.wind.speed}
              />
          )}
        </div>
      </div>
  );
};

export default App;
