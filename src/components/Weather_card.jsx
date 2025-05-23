import React from 'react';

const Weathercard = ({ data }) => {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;// for importing the cloud icon

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>Temperature: {main.temp} °C</p>
      <p>Condition: {weather[0].main}</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} km/h</p>
    </div>
  );
};

export default Weathercard;
