import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import coffeeBeans4 from "../../images/coffee-beans 4.svg"
import "../secondPageMain/secondPageMain.css"
import img from "../../images/girl_and_coffee.jpg"

const SecondPageMain = () => {
  return (
    <div className="container">
      <div className="first_block">
        <img src={img} alt="girl_and_coffee" />
      </div>
      <div className="second_block">
        <h2>About our beans</h2>
        <LinesAndBeans img={coffeeBeans4} bgc="black" />
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. <br /> <br /> Afraid at highly months do things on
          at. Situation recommend objection do intention so questions. <br /> As
          greatly removed calling pleased improve an. Last ask him cold feel
          <br /> met spot shy want. Children me laughing we prospect answered
          followed. At it went is song that held help face.
        </p>
      </div>
      <p></p>
    </div>
  )
}

export default SecondPageMain
