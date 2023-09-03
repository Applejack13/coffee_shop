import AppHeader from "./../appHeader/AppHeader"
import AboutUs from "./../aboutUs/AboutUs"
import OurBest from "../ourBest/OurBest"
import FooterApp from "../footer/FooterApp"

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <AboutUs />
      <OurBest />
      <FooterApp />
    </div>
  )
}

export default App
