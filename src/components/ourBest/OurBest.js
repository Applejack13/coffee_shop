import "../ourBest/ourBest.css"
import ProductWindow from "../productWindow/ProductWindow"
import coffeeImage1 from "../../images/windowsImage1.jpg"
import coffeeImage2 from "../../images/windowsImage2.jpg"
import coffeeImage3 from "../../images/windowsImage3.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const OurBest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
  }

  return (
    <div className="ourBest">
      <h2>Our Best</h2>
      <Slider {...settings}>
        <ProductWindow
          img={coffeeImage1}
          description={"Solimo Coffee Beans 2 kg"}
          price={"10.73$"}
        />
        <ProductWindow
          img={coffeeImage2}
          description={"Presto Coffee Beans 1 kg"}
          price={"15.99$"}
        />
        <ProductWindow
          img={coffeeImage3}
          description={"AROMISTICO Coffee 1 kg"}
          price={"6.99$"}
        />
        <ProductWindow
          img={coffeeImage1}
          description={"Solimo Coffee Beans 2 kg"}
          price={"10.73$"}
        />
        <ProductWindow
          img={coffeeImage2}
          description={"Presto Coffee Beans 1 kg"}
          price={"15.99$"}
        />
        <ProductWindow
          img={coffeeImage3}
          description={"AROMISTICO Coffee 1 kg"}
          price={"6.99$"}
        />
      </Slider>
    </div>
  )
}

export default OurBest
