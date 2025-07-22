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
        <p>Temperature (&#8457;): {tempmin}-{tempmax}</p>
        <p>Humidity (%): {humidity}</p>
        <p>CloudCover (%): {cloudcover}</p>
        <p>Visibility (miles): {visibility}</p>
        <p>Sunset: {sunset}</p>
        <p>Overall conditions: {conditions}</p>
      </>
    )
  }

  return (
    <>
      <h1>Detail info of {date}</h1>
      {detailElements}
    </>
  )
}