import AppHeader from "../appHeader/AppHeader"
import AboutUs from "../aboutUs/AboutUs"
import OurBest from "../ourBest/OurBest"
import FooterNav from "../footer/FooterNav"

const HomePage = () => {
  return (
    <div className="app">
      <AppHeader />
      <AboutUs />
      <OurBest />
      <FooterNav />
    </div>
  )
}

export default HomePage