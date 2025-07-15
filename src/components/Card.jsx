export default function Card({value, description}) {
  return (
    <div className="card">
      <div className="card-value">
        {value}
      </div>

      <div className="card-description">
        {description}
      </div>
    </div>
  )
}