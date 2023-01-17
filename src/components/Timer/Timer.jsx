import React, { useEffect, useState } from 'react'
import { useCountdown } from '../../hooks/useContdown'

const Timer = (props) => {
  const timerId = props.timer.id
  const isActive = props.timer.active

// TODO УДАЛИТЬ REF
  const [ hours, minutes, seconds ] = useCountdown(props.targetTime)
  const [ active, setActive ] = useState(null)
  const [ targetTime, setTargetTime ] = useState(props.targetTime)

  const refTimer = React.createRef()

  const [ correctHours, setCorrectHours ] = useState('00')
  const [ correctMinutes, setCorrectMinutes ] = useState('00')
  const [ correctSeconds, setCorrectSeconds ] = useState('00')

  // const startTimer = () => {
  //   const [ hours, minutes, seconds ] = useCountdown(targetTime)
  //   return [ hours, minutes, seconds ]
  // }

  useEffect(() => {
    if (!active) {
      setActive(timerId)
    }
  }, [])

  useEffect(() => {
      if (hours + minutes + seconds <= 0 && isActive) {
        props.handleTimerToggle(timerId, refTimer)
        // const time = new Date().getTime() + (props.timeInMs * 1000)
        // props.setTime(time)
        // setTargetTime(time)
      }

      if (hours < 10) {
        setCorrectHours('0' + hours)
      }

      if (minutes < 10) {
        setCorrectMinutes('0' + minutes)
      }

      if (seconds < 10) {
        setCorrectSeconds('0' + seconds)
      }
    },
    [ hours, minutes, seconds ])

  useEffect(() => {
    setActive(timerId)
    // startTimer()
  }, [ isActive ])

  if (isActive) {
    return (
      <div id={ timerId } className={ 'timer' + (isActive ? ' active' : '') } ref={ refTimer }>
        <div className="timer__wrap">
          <div className="timer__card">
          <span className="timer__time">{ correctHours } : { correctMinutes } : { correctSeconds }
          </span>
            <span className="timer__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" width="33.182" height="33.182"
                 fill="currentColor"><path
              d="M25.591 4.091c0-3.02-4.85-4.091-9-4.091-4.151 0-9 1.071-9 4.091 0 3.467 4.048 9.963 6.531 12.5-2.483 2.537-6.531 9.033-6.531 12.5 0 3.021 4.849 4.091 9 4.091 4.15 0 9-1.072 9-4.091 0-3.467-4.048-9.963-6.531-12.5 2.483-2.537 6.531-9.033 6.531-12.5zm-1 25c0 2.062-4 3.091-8 3.091s-8-1.031-8-3.091c0-3.647 5.144-11.278 7.05-12.5-1.906-1.221-7.05-8.852-7.05-12.5 0-2.061 4-3.091 8-3.091s8 1.031 8 3.091c0 3.648-5.145 11.279-7.05 12.5 1.905 1.221 7.05 8.852 7.05 12.5z"/>
              <path
                d="M10.527 29.957c0 .186 2.085.725 6.064.725s6.064-.539 6.064-.725c0-2.752-6.064-4.647-6.064-9.575 0 4.928-6.064 6.72-6.064 9.575zM16.474 15.352l.117 1.066.117-1.066c1.188-.67 5.275-5.955 5.275-8.221 0-.299-1.854-1.165-5.394-1.165s-5.394.865-5.394 1.165c.002 2.266 4.091 7.551 5.279 8.221z"/>
            </svg>
          </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Timer