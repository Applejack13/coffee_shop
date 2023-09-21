import { Link } from "react-router-dom"

const LinkTo = ({ color, marginLeft, marginTop, paddingLeft }) => {
  const stylesForText = {
    color: color,
    marginLeft: `${marginLeft}`,
    marginTop: `${marginTop}`,
    paddingLeft: `${paddingLeft}`,
  }

  return (
    <div className="linkTo">
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

export default LinkTo
