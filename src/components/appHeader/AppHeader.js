import React from "react"
import "./../appHeader/appHeader.css"
import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import Info from "../Info/Info"
import coffeeBeans3 from "../../images/coffee-beans 3.svg"

const AppHeader = () => {
  return (
    <div className="App-header">
      <Info />
      <h1>Everything You Love About Coffee</h1>
      <LinesAndBeans img={coffeeBeans3} bgc="white" />
      <h2>We makes every day full of energy and taste</h2>
      <h2>Want to try our beans?</h2>
      <button className="more_button">More</button>
    </div>
  )
}

export default AppHeader
