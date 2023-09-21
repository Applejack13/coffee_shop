import "../Info/info.css"
import { Link } from "react-router-dom"

const Info = ({ img, color, marginLeft, marginTop, paddingLeft }) => {
  const stylesForImg = {
    marginLeft: `${marginLeft}`,
    marginTop: `${marginTop}`,
    paddingLeft: `${paddingLeft}`,
  }

  const stylesForText = {
    color: color,
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: "50px",
  }

  return (
    <div className="linkTo">
      <img
        src={img}
        style={stylesForImg}
        alt="coffee_beans"
        className="coffee_beans"
      />

      <Link to="/" style={stylesForText}>
        Coffee house
      </Link>
      <Link to="/second" style={stylesForText}>
        Our coffee
      </Link>
      <Link to="/third" style={stylesForText}>
        For your pleasure
      </Link>
    </div>
  )
}

export default Info
