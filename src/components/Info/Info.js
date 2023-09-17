import "../Info/info.css"

const Info = ({ img, color, marginLeft, marginTop, paddingLeft }) => {
  const stylesForImg = {
    img: `url(${img})`,
    marginLeft: `${marginLeft}`,
    marginTop: `${marginTop}`,
    paddingLeft: `${paddingLeft}`,
  }

  const stylesForText = {
    color: color,
  }

  return (
    <div className="info">
      <img
        src={img}
        style={stylesForImg}
        alt="coffee_beans"
        className="coffee_beans"
      />
      <h3 style={stylesForText}>Coffee house</h3>
      <h3 style={stylesForText}>Our coffee</h3>
      <h3 style={stylesForText}>For your pleasure</h3>
    </div>
  )
}

export default Info
