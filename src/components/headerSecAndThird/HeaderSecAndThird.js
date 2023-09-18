import "../headerSecAndThird/headerSecAndThird.css"
import Info from "../Info/Info"
import coffeeBeans3 from "../../images/coffee-beans 3.svg"

const HeaderSecAndThird = () => {
  return (
    <div className="headerSecAndThird">
      <Info
        img={coffeeBeans3}
        color="white"
        marginLeft="75px"
        marginTop="20px"
        paddingLeft="70px"
      />
      <h2>Our Coffee</h2>
    </div>
  )
}

export default HeaderSecAndThird
