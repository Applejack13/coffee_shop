import "../productsInSecPage/productsInSecPage.css"
import WindowsInSecPage from "../windowsInSecPage/WindowsInSecPage"

const ProductsInSecPage = () => {
  return (
    <div className="forWindows">
      <WindowsInSecPage country={"Brazil"} />
      <WindowsInSecPage country={"Kenya"} />
      <WindowsInSecPage country={"Columbia"} />
      <WindowsInSecPage country={"Brazil"} />
      <WindowsInSecPage country={"Brazil"} />
      <WindowsInSecPage country={"Brazil"} />
    </div>
  )
}

export default ProductsInSecPage
