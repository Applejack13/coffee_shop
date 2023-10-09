import React, { useState, useEffect } from "react"
import "../timer/timer.css"

function Timer({ targetDate }) {
  // Состояние для хранения оставшегося времени
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  // Состояние для отображения/скрытия таймера
  const [displayTimer, setDisplayTimer] = useState(true)

  // Запуск таймера при монтировании компонента и его очистка при размонтировании
  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate)
      setTimeLeft(newTimeLeft)

      // Проверка, завершился ли таймер
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timerInterval)
        setDisplayTimer(false)
      }
    }, 1000)

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timerInterval)
  }, [targetDate])

  // Если таймер не должен отображаться, возвращаем null
  if (!displayTimer) {
    return null
  }

  // Функция для форматирования чисел, чтобы они всегда были двузначными
  const formatTime = (time) => String(time).padStart(2, "0")

  return (
    <div className="countdown-timer">
      <h2>Hurry up to buy at a discount!</h2>
      <div className="timer-box">
        <span>Days:</span>
        <span>{formatTime(timeLeft.days)}</span>
      </div>
      <div className="timer-box">
        <span>Hours:</span>
        <span>{formatTime(timeLeft.hours)}</span>
      </div>
      <div className="timer-box">
        <span>Minutes:</span>
        <span>{formatTime(timeLeft.minutes)}</span>
      </div>
      <div className="timer-box">
        <span>Seconds:</span>
        <span>{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  )
}

export default Timer

// Функция для вычисления оставшегося времени между текущей датой и целевой датой
function calculateTimeLeft(targetDate) {
  const now = new Date()
  const difference = new Date(targetDate) - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}
