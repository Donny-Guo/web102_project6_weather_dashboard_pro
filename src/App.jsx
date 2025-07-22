import { useState, useEffect, useContext } from 'react'
import './App.css'
import Card from './components/Card';
import { Link } from 'react-router';
import { DataContext } from './components/Layout.jsx'

function App() {
  const [date, setDate] = useState("");
  const [humidity, setHumidity] = useState(100);
  const data = useContext(DataContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterForecast();
  }, [date, humidity]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterForecast = () => {
    // filter by date and humidity
    setFilteredData(data.filter(item => {
      if (date) {
        return (
          (item.datetime.includes(date)) && (item.humidity <= humidity)
        )
      } else {
        return (item.humidity <= humidity);
      }
    }))
  }

  const resetFilter = () => {
    setFilteredData(data);
    setDate("");
    setHumidity(100);
  }

  return (
    <>

      {data.length > 0 && (
        <>
          <section className="card-section">
            <Card
              description="Fresno, CA"
              value="Fresno"
            />
            <Card
              description="Humidity"
              value={`${data[0].humidity} %`}
            />
            <Card
              description="Visibility"
              value={`${data[0].visibility} miles`}
            />
            <Card
              description="Cloud Cover"
              value={`${data[0].cloudcover} %`}
            />
          </section>

          <section className="filter-section">

            <div className="date-filter">
              <p className="filter-label">
                Filter by date:
              </p>
              <input
                type="text"
                placeholder='Enter date'
                value={date}
                onChange={(e) => {
                  setDate(e.currentTarget.value);
                }}
              />
            </div>

            <div className="humidity-filter">
              <p className="filter-label">
                Humidity &le; {humidity} %
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

            <button
              className="reset-button"
              onClick={resetFilter}
            >
              Reset
            </button>
          </section>

          <section className="forecast-section">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temperature (&#8457;)</th>
                  <th>Humidity (%)</th>
                  <th>Visibility (miles)</th>
                  <th>Cloud Cover (%)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => (
                  <tr key={item.datetime}>
                    <td>
                      <Link to={`/${item.datetime}`} className="date-label">
                        {item.datetime}
                      </Link>
                    </td>
                    <td>{item.temp}</td>
                    <td>{item.humidity}</td>
                    <td>{item.visibility}</td>
                    <td>{item.cloudcover}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}

    </>
  )
}

export default App
