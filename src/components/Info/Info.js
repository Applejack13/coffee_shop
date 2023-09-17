import "../Info/info.css"
import coffeeBeans from "../../images/coffee-beans.svg"

const Info = () => {
  return (
    <div className="info">
      <img src={coffeeBeans} alt="coffee_beans" className="coffee_beans" />
      <h3>Coffee house</h3>
      <h3>Our coffee</h3>
      <h3>For your pleasure</h3>
    </div>
  )
}

export default Info
