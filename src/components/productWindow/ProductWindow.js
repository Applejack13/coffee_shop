import "../productWindow/productWindow.css"
import coffeeImage from "../../images/windowsImage1.jpg"

const ProductWindow = () => {
  return (
    <div className="productWindow">
      <div className="windows">
        <img src={coffeeImage} alt="coffee_img" />
        <p>Solimo Coffee Beans 2 kg</p>
        <p>10.73$</p>
      </div>
    </div>
  )
}

export default ProductWindow
