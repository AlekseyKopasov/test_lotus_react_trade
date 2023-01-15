import './App.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import React from 'react'
import TradeRoomContainer from './components/TradeRoom/TradeRoomContainer'

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <TradeRoomContainer/>
      </div>
    </Provider>
  )
}

export default App
