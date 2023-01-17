import React from 'react'
import Timer from './Timer'
import { connect } from 'react-redux'
import { setTime, toggleTimer } from '../../redux/timer-reducer'

const TimerContainer = (props) => {
  return <Timer { ...props } handleTimerToggle={ props.toggleTimerHandler }/>
}

const mapStateToProps = (state) => ({
  targetTime: state.timer.targetTime,
})

const mapDispatchToProps = (dispatch) => ({
  toggleTimerHandler: (timerId) => {
    dispatch(toggleTimer(timerId))
  },
  // setTime(timeInMs) {
  //   dispatch(setTime(timeInMs))
  // },
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer)