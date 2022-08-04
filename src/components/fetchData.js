import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  saveToLocalStorage,
  getFromLocalStorage} from '../helperFunctions/helperFunctions';

//   const { REACT_APP_API_KEY } = process.env;
//  const url = `https://api.openweathermap.org/data/2.5/forecast` +
//               `?units=${queryParams.units}` +
//               `&lat=${queryParams.lat}` +
//               `&lon=${queryParams.lon}` +
//               `&appid=${REACT_APP_API_KEY}`;


const useFetchApi = apiUrl => {

  const initialState = getFromLocalStorage('weatherData');

  const [weatherData, setWeatherData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState(apiUrl);


  useEffect(() => {

    if (!weatherData) {
      console.log('fetching');
      axios
        .get(url)
        .then(({ data }) => {
          //add save to local storage
          saveToLocalStorage('weatherData', data);
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch(err =>
          console.log(err));
          setError(true);
          setIsLoading(true)
    }
  }, []);
  return weatherData;
};

export default useFetchApi;
