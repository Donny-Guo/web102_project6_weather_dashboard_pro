import { Outlet } from "react-router"
import { useEffect, useState, createContext } from "react";
import Header from "./Header"

const WEATHERBIT_API_KEY = import.meta.env.VITE_WEATHERBIT_API_KEY;
export const DataContext = createContext(null);

export default function Layout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Fresno,CA?key=${WEATHERBIT_API_KEY}&include=days`);
      const json = await response.json();
      const forecastData = json.days;
      setData(forecastData);
    }
    fetchData();
  }, []);

  return (
    <DataContext value={data}>
      <main>
        <Header />
        <Outlet />
      </main>
    </DataContext>
    
  )
}