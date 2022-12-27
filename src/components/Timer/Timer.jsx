import React, { useState } from 'react'
import { useCountdown } from '../../hooks/useContdown'

const Timer = ({ timerId = '0', active, targetTime }) => {
  const [hours, minutes, seconds] = useCountdown(targetTime)
  const [ isActive, setIsActive ] = useState(active)

  if (hours + minutes + seconds <= 0) {
    setIsActive(false)
    return false
  }
    // remove timer
    // return id to parent
   else {
    setIsActive(true)
    return (
      <div id={ timerId } className={ 'timer' + (isActive ? ' active' : '') }>
        <div className="timer__wrap">
          <div className="timer__card">
            <span className="timer__time">{ hours } : { minutes } : { seconds }
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