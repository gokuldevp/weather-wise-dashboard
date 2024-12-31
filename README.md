# Weather Dashboard

## Project Description

This project is a **responsive and interactive weather dashboard** that uses the [Open-Meteo Historical Weather API](https://open-meteo.com/) to fetch and display historical weather data based on user inputs. The dashboard provides users with an intuitive interface to view weather metrics for a specific location and date range.

---

## Features

### Dashboard Inputs:
1. **Latitude**: An input box to enter latitude (accepts only valid numerical inputs).
2. **Longitude**: An input box to enter longitude (accepts only valid numerical inputs).
3. **Start Date**: A date picker for selecting the start date.
4. **End Date**: A date picker for selecting the end date.

### API Integration:
- Integrates with the Open-Meteo Historical Weather API to retrieve weather data based on user inputs.
- Fetches the following daily weather variables:
  - Maximum Temperature (2 m)
  - Minimum Temperature (2 m)
  - Mean Temperature (2 m)
  - Maximum Apparent Temperature (2 m)
  - Minimum Apparent Temperature (2 m)
  - Mean Apparent Temperature (2 m)

### Data Display:
1. **Data Table**: A paginated table that displays the fetched weather data, allowing users to view 10/20/50 rows per page.

---

## Project Structure

```plaintext
.
├── public/
├── src/                   
│   ├── components/      
│   │   ├── WeatherDashboard.js  
│   │   └── WeatherDataTable.js  
│   ├── hooks/           
│   │   └── weatherService.js  
│   ├── App.css            
│   ├── App.js              
│   ├── index.css  
│   └── index.js           
├── .gitignore             
├── README.md              
├── package-lock.json     
└── package.json          
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

3. Enter the following inputs to fetch weather data:
   - **Latitude** and **Longitude**: Valid numerical coordinates.
   - **Start Date** and **End Date**: Use the date pickers to select a range.

4. View the weather data in tabular formats with pagination.

---

## API Reference

- [Open-Meteo Historical Weather API](https://open-meteo.com/) is used to fetch weather data.
- Daily weather variables fetched:
  - Maximum Temperature (2 m)
  - Minimum Temperature (2 m)
  - Mean Temperature (2 m)
  - Maximum Apparent Temperature (2 m)
  - Minimum Apparent Temperature (2 m)
  - Mean Apparent Temperature (2 m)

---
---

## Technologies Used

- **React**: For building the user interface.
- **CSS**: For styling components.
- **Open-Meteo API**: For weather data.
- **JavaScript**: For core logic and API integration.

---

## Deployed link
https://aesthetic-bavarois-de14d5.netlify.app/
