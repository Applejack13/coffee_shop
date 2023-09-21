import "../imgAndTextContainer/imgAndTextContainer.css"

const ImgAndTextContainer = ({ img, h, p }) => {
  ;<div className="containerImgAndText">
    <div className="first_block">
      <img src={img} alt="girl_and_coffee" />
    </div>
    <div className="second_block">
      <h2>{h}</h2>
      <p>{p}</p>
    </div>
  </div>
}

export default ImgAndTextContainer
