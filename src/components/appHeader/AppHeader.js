import React from "react"
import "./../appHeader/appHeader.css"
import coffeeBeans from "../../images/coffee-beans.svg"

const AppHeader = () => {
  return (
    <div className="App-header">
      <img src={coffeeBeans} alt="coffee_beans" className="coffee_beans" />
      <h3>Coffee house</h3>
      <h3>Our coffee</h3>
      <h3>For your pleasure</h3>
      <h1>Everything You Love About Coffee</h1>
      <h2>We makes every day full of energy and taste</h2>
      <h2>Want to try our beans?</h2>
      <button className="more_button">More</button>
    </div>
  )
}

export default AppHeader
