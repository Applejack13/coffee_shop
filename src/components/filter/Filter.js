import "../filter/filter.css"

const Filter = () => {
  return (
    <div className="filter">
      <h2>Looking for</h2>
      <input type="text" placeholder="start typing here..." />
      <h2>Or filter</h2>
      <button>Brazil</button>
      <button>Kenia</button>
      <button>Columbia</button>
    </div>
  )
}

export default Filter
