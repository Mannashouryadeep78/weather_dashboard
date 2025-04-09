import React from 'react';
import Submitbutton from './Submit_button';


const Searchbar = ({ city, setCity, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    //trim the extra whitespace from the input
    if (trimmedCity !== '') {
      onSearch(trimmedCity);
    }
  };

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoFocus
      />
      <Submitbutton label="Search" />
    </form>
  );
};

export default Searchbar;
