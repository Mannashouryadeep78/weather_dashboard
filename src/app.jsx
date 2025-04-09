// Importing  components from  local files and also modules from react

import React, { useState } from 'react';//usestate hook for state management 
import Error from "./components/Error";//for error handling
import Loader from "./components/Loader";//for loading time 
import Searchbar from "./components/Search_bar";// an modular searchbar i made and imported.
import Submitbutton from "./components/Submit_button";//not used in this page.
import Weathercard from "./components/Weather_card";//modular card for showing city and weather imported

const App = () => {
  //usestate functions made for handling state.
  const [city, setCity] = useState('');//to hold cities name
  const [weatherData, setWeatherData] = useState(null);//for storing fetched data from openweathermap API
  const [loading, setLoading] = useState(false);//for the loader state
  const [error, setError] = useState('');//error handling by holding error messages if exist
  const [recentSearches, setRecentSearches] = useState([]);//hold the list for recent searches limit set upto 5
  const [darkMode, setDarkMode] = useState(false);//for darkmode and light mode
  //a question may arrive useState(''),useState(null),useState(false),useState([]) what are diff between them.
  //useState('')= for storing string value,useState(null)= for fetched data if not available initial stage will be null
  //useState(false)= initial state will be considered false, useState([])=to hold a list of items in it.
  //what is list?a type of structured data that contains multiple values like string number etc.

  const API_KEY = import.meta.env.VITE_MY_API_KEY;
  //imported the api key from the .env file. 
  //what is env file? a simple text file used to store environment variables for a project to make it secure.

  //Asynchronous function to fetch weather data
  //what is Asynchronous function? a type of function that will resonsive to other events in a potential long running task
  const fetchWeather = async (cityName) => {
    setLoading(true);//state from setLoading is called true which is initially false for fetching.
    setError('');//it will clear prev error messages.
    setWeatherData(null);// the weather data will always be set null value before fetching another data

    try {
      const res = await fetch(
        //fetching data using cityName and providing apikey 
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json(); //parse the json file from api
      //why parsing? the json file is in string we cannot work with it so we chage its datatype into array or object.

      if (res.ok) {
        //is the respond is succesful we will update the state with data we fetched.
        setWeatherData(data);

        //here we update the recent search bala state
        setRecentSearches((prev) => {
          //new aarray made with current city name and it is matched with the prev city. 
          // if it doesnt match then it is included.
          const updated = [cityName, ...prev.filter(c => c.toLowerCase() !== cityName.toLowerCase())];
          //"..." is the spread operator expand the elements and makes new array.
          //here the city name is changed into lowercase and after that both are matched by using filter
          return updated.slice(0, 5); // this slice function is used here to Limit : recent 5 searches
        });

      } else {
        setError(data.message || 'City not found');
        //if the response is not okay then city not found or data message.
      }
    } catch (err) {
      setError('Failed to fetch weather data');//handle error during fetch operations 
    } finally {
      setLoading(false);//after everything is done the state is loaded tofalse again
    }
  };

  return (
    // maincontainer for the weather dashboard. is darkmode is true then dark
    <div className={`weatherdashboardcontainer ${darkMode ? 'dark' : ''}`}> 
     {/* Flexed bala container for the theme toggle and refresh */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Button for controlling dark and light mode */}
        <button onClick={() => setDarkMode(!darkMode)} className="toggle_btn">
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>

        {/* Refresh button to fetch weather data for the current city, */}
        {city && !loading && (
          <button onClick={() => fetchWeather(city)} className="refresh_button">
             Refresh
          </button>
        )}
      </div>

        {/*heading*/}
      <h1>Weather Dashboard</h1>

        {/* Search bar imported from components for entering cities */}
      <Searchbar city={city} setCity={setCity} onSearch={fetchWeather} />

        {/*rendering of recent searches done here */}
        {/*if length of recentsearches is more than 0 and map over recent searches by cityItem and index(idx)*/}
      {recentSearches.length > 0 && (
        <div className="recent_search">
          <p>Recent Searches:</p>
          <div className="recent_button">
            {recentSearches.map((cityItem, idx) => (
              <button key={idx} onClick={() => fetchWeather(cityItem)}>
                {/*adding button for each recent searches upto 5*/}
                {cityItem}
              </button>
            ))}
          </div>
        </div>
      )}
{/*here all the functions are in {dunction && <dunction/>}state what does this means */}
{/*this means if both the dunction and <dunction/> value is true then only it will run. */}
{/*dunction means it is a boolean variable which tells whether the async process is in progress or not*/}
{/*if both of them are true then only it will respond*/}
      {loading && <Loader />}
      {error && <Error message={error} />}
      {weatherData && <Weathercard data={weatherData} />}
    </div>
  );
};

export default App;
