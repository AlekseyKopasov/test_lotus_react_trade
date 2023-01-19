import TradeRoom from './TradeRoom'
import { connect } from 'react-redux'
import { setTime } from '../../redux/timer-reducer'
import { useEffect, useState } from 'react'

const TradeRoomContainer = (props) => {
  const CORRECT_SECONDS = 1000

  const [ targetTime, setTargetTime ] = useState(props.targetTime)

  const setCurrentTime = () => {
    const time = new Date().getTime() + CORRECT_SECONDS + (props.timeInMs * 1000)
    props.setTime(time)
    return time
  }

  useEffect(() => {
    if (!targetTime) {
      const time = setCurrentTime()
      setTargetTime(time)
    }
  }, [])

  return targetTime && <TradeRoom { ...props }/>
}

const mapStateToProps = (state) => ({
  timeInMs: state.timer.timeInMs,
  participants: state.timer.participants,
  targetTime: state.timer.targetTime,
})

const mapDispatchToProps = (dispatch) => ({
  setTime: (timeInMs) => {
    dispatch(setTime(timeInMs))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeRoomContainer)