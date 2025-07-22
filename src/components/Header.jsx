import { Link } from "react-router"
export default function Header() {
  return (
    <header>
      <Link className="home-link" to="/">
        <img
          src="/icon.png"
          width="18px"
        />
        <div>
          WeatherDash
        </div>
      </Link>
      <Link to="/">Dashboard</Link>
      <Link to="/">Search</Link>
      <Link to="/">About</Link>
    </header>
  )
}