import axios from 'axios';

const fetchWeatherData = async (latitude, longitude, startDate, endDate) => {
  try {
    const url = "https://archive-api.open-meteo.com/v1/archive";
    console.log(typeof(startDate));
    
    const params = {
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
      start_date: startDate,
      end_date: endDate,
      daily: [
        'temperature_2m_max',
        'temperature_2m_min',
        'temperature_2m_mean',
        'apparent_temperature_max',
        'apparent_temperature_min',
        'apparent_temperature_mean',
      ],
      timezone: 'auto',
    };

    console.log(`Fetching data from URL: ${url}`);
    console.log('Parameters:', params);

    const response = await axios.get(url, { params });
    
    return response.data.daily;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

export default fetchWeatherData;
