import React from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'

const TradeRoom = (props) => {
  console.log('timer render in table',  props.participants)
  return (
    <div>
      <Header/>
      <TradeTable participants={ props.participants } targetTime={ props.targetTime }/>
    </div>
  )
}

export default TradeRoom