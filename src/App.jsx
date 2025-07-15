import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card';
const WEATHERBIT_API_KEY = import.meta.env.VITE_WEATHERBIT_API_KEY;

function App() {
  const [date, setDate] = useState("");
  const [humidity, setHumidity] = useState(30);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fresno,CA?key=${WEATHERBIT_API_KEY}&include=days`);
      const json = await response.json();
      const forecastData = json.days;
      setData(forecastData);
      setFilteredData(forecastData);
    }
    fetchData();
  }, []);

  const filterForecast = () => {
    // filter by date and humidity
    setFilteredData(data.filter(item => {
      if (date) {
        return (
          (item.datetime === date) && (item.humidity <= humidity)
        )
      } else {
        return (item.humidity <= humidity);
      }
    }))
  }
  return (
    <main>
      <header>
        <a>WeatherDash</a>
        <a>Dashboard</a>
        <a>Search</a>
        <a>About</a>
      </header>

      <section className="card-section">
        <Card 
          description="cloud cover"
          value="0.3"
        />
        <Card
          description="humidity"
          value="12"
        />
        <Card
          description="visibility"
          value="15"
        />
      </section>

      <section className="filter-section">
        
        <div>
          <p>date: {date}</p>
          <input
            type="text"
            placeholder='Enter date'
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
          />
        </div>
        
        <div>
          <p>
            humidity &le; {humidity} %
          </p>
          <input
            type="range"
            min="0"
            max="100"
            step="1.0"
            value={humidity}
            onChange={(e) => setHumidity(e.currentTarget.value)}
          />
        </div>
        
        <button onClick={filterForecast}>
          Filter
        </button>
      </section>

      <section className="forecast-section">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Visibility</th>
              <th>Cloud Cover</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.datetime}>
                <td>{item.datetime}</td>
                <td>{item.temp}</td>
                <td>{item.humidity}</td>
                <td>{item.visibility}</td>
                <td>{item.cloudcover}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>
    </main>
  )
}

export default App
