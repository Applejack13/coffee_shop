import React, { useState } from "react"
import "../filter/filter.css"

const Filter = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchQuery(value)
    onFilterChange(value)
  }

  const handleButtonClick = (filterValue) => {
    setSearchQuery(filterValue)
    onFilterChange(filterValue)
  }

  return (
    <div className="filter">
      <h2>Looking for</h2>
      <input
        type="text"
        placeholder="start typing here..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <h2>Or filter</h2>
      <button onClick={() => handleButtonClick("Brazil")}>Brazil</button>
      <button onClick={() => handleButtonClick("Kenia")}>Kenia</button>
      <button onClick={() => handleButtonClick("Columbia")}>Columbia</button>
    </div>
  )
}

export default Filter
