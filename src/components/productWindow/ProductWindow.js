import "../productWindow/productWindow.css"

const ProductWindow = ({ img, description, price }) => {
  return (
    <div className="productWindow">
      <div className="windows">
        <img src={img} alt="coffee_img" />
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductWindow
