import React, { useState } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = async () => {
    const apiKey = '94af51e2fcd0f6e8ee5a865ad9ad911e'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 text-white flex flex-col items-center justify-center px-6">
     
      <h1 className="text-3xl font-bold mb-8">Weather Forecast</h1>

    
      <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-1/3">
        <input
          type="text"
          className="w-full p-4 rounded-md bg-white text-black placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-md font-bold shadow-lg transition-all"
          onClick={fetchWeather}
        >
          Search
        </button>
      </div>

      {weatherData && weatherData.main ? (
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
          <p className="text-xl mb-4">{weatherData.weather[0].description}</p>
          <div className="flex justify-center items-center gap-4">
            <div>
              <p className="text-5xl font-bold">{weatherData.main.temp}°C</p>
              <p className="text-sm">Temperature</p>
            </div>
            <div>
              <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
              <p className="text-lg">Wind: {weatherData.wind.speed} km/h</p>
            </div>
          </div>
        </div>
      ) : weatherData ? (
        <p className="text-red-300 mt-4">City not found! Try again.</p>
      ) : null}
    </div>
  );
}

export default WeatherApp;
