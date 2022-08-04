import './weatherCard.scss';

import { dateToDay, hoursToTime } from '../helperFunctions/helperFunctions';

const WeatherCard = ({
  dt_txt,
  main: { temp_min, temp_max },
  weather: [{ icon, description }],
}) => {
  return (
    // <div className="grid">
    <div className='WeatherCard'>
      <h3>{hoursToTime(dt_txt).split(':00 ').join(' ')}</h3>
      <img
        src={` http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>
        <strong>Min: </strong>
        {temp_min} | <strong>Max:</strong> {temp_max}
      </p>

      <p></p>
    </div>
    // </div>
  );
};

export default WeatherCard;
