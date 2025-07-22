import { useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "./Layout";

export default function DetailView() {
  const { date } = useParams();
  const data = useContext(DataContext);
  const detailInfo = data ? data.filter(item => item.datetime === date): [];
  let detailElements = null;
  if (detailInfo.length > 0) {
    const {tempmax, tempmin, 
          humidity, cloudcover, 
          visibility, sunset,
          conditions} = detailInfo[0];
    detailElements = (
      <>
        <h3>Temperature: {tempmin}-{tempmax} &#8457;</h3>
        <h3>Humidity: {humidity} %</h3>
        <h3>CloudCover: {cloudcover} %</h3>
        <h3>Visibility: {visibility} {visibility > 0 ? "miles" : "mile"}</h3>
        <h3>Sunset: {sunset}</h3>
        <h3>Overall conditions: {conditions}</h3>
      </>
    )
  }

  return (
    <section className="detailview-section">
      <h1>Weather Info for {date}</h1>
      {detailElements}
    </section>
  )
}