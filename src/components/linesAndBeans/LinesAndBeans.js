import "../linesAndBeans/linesAndBeans.css"

const LinesAndBeans = ({ img, bgc }) => {
  const styles = {
    img: `url(${img})`,
    backgroundColor: bgc,
  }

  return (
    <div className="beans_and_lines">
      <p style={styles} />
      <img src={img} alt="coffee beans" />
      <p style={styles} />
    </div>
  )
}

export default LinesAndBeans
