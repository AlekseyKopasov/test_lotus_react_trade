import TradeRoom from './TradeRoom'
import { connect } from 'react-redux'
import { setTime } from '../../redux/timer-reducer'
import { useEffect, useState } from 'react'

const TradeRoomContainer = (props) => {
  const [ targetTime, setTargetTime ] = useState(props.targetTime)

  useEffect(() => {
    if (!targetTime) {
      const time = new Date().getTime() + (props.timeInMs * 1000)
      props.setTime(time)
      setTargetTime(time)
    }
  }, [])
  // console.log(props.participants)
  return targetTime && <TradeRoom { ...props }/>
}

const mapStateToProps = (state) => ({
  timeInMs: state.timer.timeInMs,
  participants: state.timer.participants,
  targetTime: state.timer.targetTime,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setTime(timeInMs) {
      dispatch(setTime(timeInMs))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeRoomContainer)