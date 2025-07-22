export default function Header() {
  return (
    <header>
      <a className="home-link" href="https://astro-weather-dashboard.netlify.app/">
        <img
          src="/icon.png"
          width="18px"
        />
        <div>
          WeatherDash
        </div>
      </a>
      <a href="https://astro-weather-dashboard.netlify.app/">Dashboard</a>
      <a href="https://astro-weather-dashboard.netlify.app/">Search</a>
      <a href="https://astro-weather-dashboard.netlify.app/">About</a>
    </header>
  )
}