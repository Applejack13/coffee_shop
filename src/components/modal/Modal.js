import { useState } from "react"
import "../modal/modal.css"

function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className="modal">
      <button onClick={openModal}>More</button>

      {isOpen && (
        <div className="modal">
          <div
            className="modal-background"
            onClick={closeModal}
            onKeyDown={escape}
          ></div>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>
              Coffee is not just a beverage; it's a true ritual that warms the
              soul and lifts the spirits. In the morning, when the alarm clock
              rings, the first thought is a cup of aromatic coffee. The scent of
              freshly brewed coffee fills the room, as if inviting you into the
              world of alertness and energy. Every cup of coffee is a little
              adventure. It can be gently sweet, like a first kiss, or strong
              and refined, like a conversation with a close friend. Hot coffee
              on cold days warms you up, while a cool drink in the heat cools
              you down. And it doesn't matter whether you're enjoying coffee in
              a cozy café, at your desk at work, or in the great outdoors—it
              always brings joy and inspiration. So let's raise a cup to coffee
              and savor this moment!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
