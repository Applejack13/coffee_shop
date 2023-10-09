import HeaderSecAndThird from "../headerSecAndThird/HeaderSecAndThird"
import SecondPageMain from "../secondPageMain/SecondPageMain"
import Filter from "../filter/Filter"
import FooterNav from "../footer/FooterNav"
import ProductsInSecPage from "../productsInSecPage/ProductsInSecPage"
import { useState } from "react"

const SecondPage = () => {
  const [setFilterValue] = useState("")

  const handleFilterChange = (value) => {
    setFilterValue(value)
  }

  return (
    <div className="sec_third_nav">
      <HeaderSecAndThird />
      <SecondPageMain />
      <Filter onFilterChange={handleFilterChange} />
      <ProductsInSecPage />
      <FooterNav />
    </div>
  )
}

export default SecondPage
