import { useEffect, useState } from 'react'

const useCountdown = (date) => {
  const countDownDate = new Date(date).getTime()

  const [ countDown, setCountDown ] = useState(
    countDownDate - new Date().getTime(),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      let result = countDownDate - new Date().getTime()

      if (result > 0) {
        setCountDown(result)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [ countDownDate ])

  return getValues(countDown)
}

const getValues = (countDown) => {
  let hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return [ hours, minutes, seconds ]
}

export { useCountdown }