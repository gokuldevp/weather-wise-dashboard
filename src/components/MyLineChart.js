import React, { useEffect, useRef, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const MyLineChart = (weatherData) => {
  const data1 = useMemo(
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

  const chartRef = useRef(null);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  // Destroy the Chart instance before rendering a new one
  useEffect(() => {
    const chartInstance = chartRef.current;
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
        {/* <h1>{props}</h1> */}
      <h2>Line Example</h2>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};



const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  },
  scales: {
    x: {
      type: 'category'
    },
    y: {
      type: 'linear'
    }
  }
};

export default MyLineChart;
