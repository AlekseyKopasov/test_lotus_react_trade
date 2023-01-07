import TradeRoom from './TradeRoom'
import { connect } from 'react-redux'
import { getBiddingTime, getParticipants, getTimer } from '../../redux/timer-reducer'

const TradeRoomContainer = (props) => {
    return <TradeRoom {...props}/>
}

const mapStateToProps = (state) => {
  const t = getBiddingTime()
    console.log('targetTime in TradeRoomContainer', t)
    return {
        participants: state.timer.participants
    }
}

export default connect(mapStateToProps, { getParticipants, getTimer, getBiddingTime })(TradeRoomContainer)