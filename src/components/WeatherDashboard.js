import React, { useState } from "react";
import fetchWeatherData from "../hooks/watherService";
import WeatherDataTable from "./WeatherDataTable";

const WeatherDashboard = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!latitude || !longitude || !startDate || !endDate) {
      setError("All fields are required.");
      return false;
    }
    if (isNaN(latitude) || isNaN(longitude)) {
      setError("Latitude and Longitude must be valid numbers.");
      return false;
    }
    if (latitude < -90 || latitude > 90) {
      setError("Latitude must be between -90 and 90 degrees.");
      return false;
    }
    if (longitude < -180 || longitude > 180) {
      setError("Longitude must be between -180 and 180 degrees.");
      return false;
    }
    const today = new Date();
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date cannot be later than the end date.");
      return false;
    }
    if (new Date(startDate) > today || new Date(endDate) > today) {
      setError("Dates cannot be in the future.");
      return false;
    }
    return true;
  };
  

  const formatDate = (date) => {
    return new Date(date).toISOString().split('T')[0];
  };

  const handleFetchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    if (!validateInputs()) {
      setLoading(false);
      return;
    }

    try {
      const latitudeValue = parseFloat(latitude);
      const longitudeValue = parseFloat(longitude);
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);

      console.log('Formatted Values:');
      console.log(`Latitude: ${latitudeValue}`);
      console.log(`Longitude: ${longitudeValue}`);
      console.log(`Start Date: ${formattedStartDate}`);
      console.log(`End Date: ${formattedEndDate}`);

      const data = await fetchWeatherData(latitudeValue, longitudeValue, formattedStartDate, formattedEndDate);
      console.log("Fetched Weather Data:", data);
      setWeatherData(data);
    } catch (err) {
      console.error('Error in handleFetchWeather:', err);
      setError(err.message || "Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container my-4">
      <h1 className="mb-4 text-center">Weather Dashboard</h1>
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="form-control border border-primary shadow-sm"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="form-control border border-primary shadow-sm"
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control border border-primary shadow-sm"
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control border border-primary shadow-sm"
          />
        </div>
      </div>
      <button
        onClick={handleFetchWeather}
        className="btn btn-primary mb-4 px-4 py-2 shadow-sm"
      >
        Fetch Weather Data
      </button>
      {loading && <p className="text-primary text-center">Loading...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      {weatherData && (
        <div className="table-responsive">
          <WeatherDataTable weatherData={weatherData} />
        </div>
      )}
    </div>
  );
  
  };

export default WeatherDashboard;
