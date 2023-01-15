import React from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'

const TradeRoom = (props) => {
  return (
    <div>
      <Header/>
      <TradeTable bidders={ props.participants } targetTime={ props.targetTime }/>
    </div>
  )
}

export default TradeRoom