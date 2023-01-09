import React, { memo, useEffect, useState } from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'

const TradeRoom = (props) => {
  // useEffect(() => {
  //
  // }, [])
  // console.log('targetTime in TradeRoom', targetTime)
  // debugger
  return (
    <div>
      {
        // console.log('render Table---')
      }
      <Header/>
      {/*<TradeTable bidders={ participants } targetTime={ targetTime }/>*/}
    </div>
  )
}

export default TradeRoom