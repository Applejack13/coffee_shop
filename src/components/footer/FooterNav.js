import "../footer/footer-nav.css"
import LinesAndBeans from "../linesAndBeans/LinesAndBeans"
import Info from "../Info/Info"
import coffeeBeans4 from "../../images/coffee-beans 4.svg"
import coffeeBeans2 from "../../images/coffee-beans 2.svg"

const FooterNav = () => {
  return (
    <div className="app-footer">
      <Info
        img={coffeeBeans2}
        color="black"
        marginLeft="37%"
        marginTop="30px"
        paddingLeft="0"
      />
      <LinesAndBeans img={coffeeBeans4} bgc="black" />
    </div>
  )
}

export default FooterNav
