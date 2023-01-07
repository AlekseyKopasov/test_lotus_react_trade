import React, { memo } from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'
import { getBiddingTime } from '../../redux/timer-reducer'

const TradeRoom = memo(({ participants, targetTime }) => {
  console.log('targetTime in TradeRoom', targetTime)
  // debugger
  return (
    <div>
      {
        console.log('render Table---')
      }
      <Header/>
      {/*<TradeTable bidders={ participants } targetTime={ targetTime }/>*/}
    </div>
  )
})

export default TradeRoom