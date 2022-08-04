import { useState } from 'react';
import './App.css';
import './components/weatherCard.scss';
import WeatherCard from './components/weatherCard';
// import API Fetch helper function
import useFetchApi from './components/fetchData';

const { REACT_APP_API_KEY } = process.env;

function App() {
  const [queryParams, setQueryParams] = useState({
    units: 'metric',
    lat: 48.5655474,
    lon: 10.9282621,
  });

  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast` +
              `?units=${queryParams.units}` +
              `&lat=${queryParams.lat}` +
              `&lon=${queryParams.lon}` +
              `&appid=${REACT_APP_API_KEY}`;

  const weatherData = useFetchApi(weatherApiUrl);
  console.log(weatherData);

  return (
    <div className='App'>
      <h1>Weather Info for {weatherData?.city.name}</h1>
      <main>
        <div className='grid'>
          {weatherData?.list.map((item, i) => {
            // only show weather for the next 24 hours
            if (i < 9) {
              return (
              <WeatherCard {...item} key={i} />
            )}
            return i === 0 && <WeatherCard {...item} key={i} />
          }
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
