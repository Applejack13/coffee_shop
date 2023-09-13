import coffeeBeans from "../../images/coffee-beans 2.svg"
import "../footer/footer-nav.css"

const FooterNav = () => {
  return (
    <div className="App-nav">
      <img src={coffeeBeans} alt="coffee_beans" className="coffee_beans_2" />
      <h3>Coffee house</h3>
      <h3>Our coffee</h3>
      <h3>For your pleasure</h3>
    </div>
  )
}

export default FooterNav
