import TradeRoom from './TradeRoom'
import { connect } from 'react-redux'
import { getBiddingTime, getParticipants, getTimer, setTime } from '../../redux/timer-reducer'
import { useEffect, useState } from 'react'

const TradeRoomContainer = (props) => {


  return <TradeRoom { ...props }/>
}

const mapStateToProps = (state) => ({
    participants: state.timer.participants
})

export default connect(mapStateToProps, { getBiddingTime })(TradeRoomContainer)