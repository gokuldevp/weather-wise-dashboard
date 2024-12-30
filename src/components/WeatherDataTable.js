import React, { useState, useMemo } from 'react';

const WeatherDataTable = ({ weatherData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const data = useMemo(
    () =>
      weatherData.time.map((date, index) => ({
        date,
        maxTemp: weatherData.temperature_2m_max[index],
        minTemp: weatherData.temperature_2m_min[index],
        meanTemp: weatherData.temperature_2m_mean[index],
        apparentMaxTemp: weatherData.apparent_temperature_max[index],
        apparentMinTemp: weatherData.apparent_temperature_min[index],
        apparentMeanTemp: weatherData.apparent_temperature_mean[index],
      })),
    [weatherData]
  );

  const startRow = currentPage * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentData = data.slice(startRow, endRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(0); // Reset to first page when changing rows per page
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Weather Data Table</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Max Temp (°C)</th>
            <th scope="col">Min Temp (°C)</th>
            <th scope="col">Mean Temp (°C)</th>
            <th scope="col">Apparent Max Temp (°C)</th>
            <th scope="col">Apparent Min Temp (°C)</th>
            <th scope="col">Apparent Mean Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.maxTemp}&deg;C</td>
              <td>{row.minTemp}&deg;C</td>
              <td>{row.meanTemp}&deg;C</td>
              <td>{row.apparentMaxTemp}&deg;C</td>
              <td>{row.apparentMinTemp}&deg;C</td>
              <td>{row.apparentMeanTemp}&deg;C</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="pagination mt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="btn btn-primary mr-2">
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages - 1} className="btn btn-primary ml-2">
          Next
        </button>
        <select value={rowsPerPage} onChange={handleRowsPerPageChange} className="form-control ml-4" style={{ display: 'inline-block', width: 'auto' }}>
          {[10, 20, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
  
};

export default WeatherDataTable;
