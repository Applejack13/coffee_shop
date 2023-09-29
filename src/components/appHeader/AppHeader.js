import React from "react"
import "./../appHeader/appHeader.css"
import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import Info from "../Info/Info"
import coffeeBeans3 from "../../images/coffee-beans 3.svg"
import coffeeBeans4 from "../../images/coffee-beans.svg"
import Modal from "../modal/Modal"

const AppHeader = () => {
  return (
    <div className="App-header">
      <Info
        img={coffeeBeans4}
        color="white"
        marginLeft="75px"
        marginTop="20px"
        paddingLeft="70px"
      />
      <h1>Everything You Love About Coffee</h1>
      <LinesAndBeans img={coffeeBeans3} bgc="white" />
      <h2>We makes every day full of energy and taste</h2>
      <h2>Want to try our beans?</h2>
      <Modal />
    </div>
  )
}

export default AppHeader
