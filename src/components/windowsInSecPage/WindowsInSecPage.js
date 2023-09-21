import "../windowsInSecPage/windowsInSecPage.css"
import coffeImg from "../../images/coffee_for_sec_page.jpg"

const WindowsInSecPage = ({ country }) => {
  return (
    <div className="windowsInSecPage">
      <div className="window2">
        <img src={coffeImg} alt="coffee" />
        <h2>{"AROMISTICO Coffee 1 kg"}</h2>
        <p>{country}</p>
        <p>{"6.99$"}</p>
      </div>
    </div>
  )
}

export default WindowsInSecPage
