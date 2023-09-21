import "../thirdPageMain/thirdPageMain.css"
import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import coffeeBeans4 from "../../images/coffee-beans 4.svg"
import aromitico_coffee from "../../images/aromico_coffee.jpg"

const ThirdPageMain = () => {
  return (
    <div className="thirdPageMain">
      <div className="first_block_trird_page">
        <img src={aromitico_coffee} alt="aromitico_coffee" />
      </div>
      <div className="second_block_trird_page">
        <h2>About it</h2>
        <LinesAndBeans img={coffeeBeans4} bgc="black" />
        <p>
          <b>Country:</b> Brazil
        </p>
        <p>
          <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <b>Price:</b> <span>16.99$</span>
        </p>
      </div>
    </div>
  )
}

export default ThirdPageMain
