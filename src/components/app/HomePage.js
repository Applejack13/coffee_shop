import AppHeader from "../appHeader/AppHeader"
import AboutUs from "../aboutUs/AboutUs"
import OurBest from "../ourBest/OurBest"
import FooterNav from "../footer/FooterNav"
import Timer from "../timer/Timer"

const HomePage = () => {
  const targetDate = new Date("2023-12-31T23:59:59")

  return (
    <div className="app">
      <AppHeader />
      <AboutUs />
      <Timer targetDate={targetDate} />
      <OurBest />
      <FooterNav />
    </div>
  )
}

export default HomePage
