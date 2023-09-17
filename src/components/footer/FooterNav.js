import "../footer/footer-nav.css"
import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import Info from "../Info/Info"
import coffeeBeans4 from "../../images/coffee-beans 4.svg"

const FooterNav = () => {
  return (
    <div className="app-footer">
      <Info />
      <LinesAndBeans img={coffeeBeans4} bgc="black" />
    </div>
  )
}

export default FooterNav
