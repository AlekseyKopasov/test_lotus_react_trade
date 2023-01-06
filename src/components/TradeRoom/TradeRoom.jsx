import React, { memo, useEffect, useState } from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'

const bidders = [
  { id: 0, name: 'Лотус', active: true },
  { id: 1, name: 'Company Name', active: false },
  { id: 2, name: 'Company Name', active: false },
  { id: 3, name: 'Company Name', active: false },
]

const timeInMs = 3 * 1000
const currentTime = new Date().getTime()
const targetTime = currentTime + timeInMs

const TradeRoom = memo(() => {
  return (
    <div>
      {
        console.log('render Table---', targetTime)
      }
      <Header/>
      <TradeTable bidders={ bidders } targetTime={ targetTime }/>
    </div>
  )
})

export default TradeRoom