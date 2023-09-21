import HeaderSecAndThird from "../headerSecAndThird/HeaderSecAndThird"
import SecondPageMain from "../secondPageMain/SecondPageMain"
import Filter from "../filter/Filter"
import FooterNav from "../footer/FooterNav"
import ProductsInSecPage from "../productsInSecPage/ProductsInSecPage"

const SecondPage = () => {
  return (
    <div className="sec_third_nav">
      <HeaderSecAndThird />
      <SecondPageMain />
      <Filter />
      <ProductsInSecPage />
      <FooterNav />
    </div>
  )
}

export default SecondPage
