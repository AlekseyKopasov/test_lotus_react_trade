import React from 'react'
import Header from '../Header/Header'
import TradeTable from '../TradeTable/TradeTable'

const bidders = [
  { id: 0, name: 'Лотус', active: true },
  { id: 1, name: 'Company Name', active: false },
  { id: 2, name: 'Company Name', active: false },
  { id: 3, name: 'Company Name', active: false },
]

const timeInMs = 10 * 1000
const currentTime = new Date().getTime()
const endTime = currentTime + timeInMs

const TradeRoom = () => {
  return (
    <div>
      <Header/>
      <TradeTable bidders={ bidders } targetTime={ endTime }/>
    </div>
  )
}

export default TradeRoom