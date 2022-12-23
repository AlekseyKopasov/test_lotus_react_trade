import './App.scss'
import Header from './components/Header/Header'
import BiddingTable from './components/BiddingTable/BiddingTable'

const App = () => {
  const timeInMs = 10 * 1000;
  const currentTime = new Date().getTime()
  const endProgressTime = currentTime + timeInMs

  return (
    <div className="App">
      <Header/>

      <main>
        <BiddingTable targetDate={endProgressTime}/>
      </main>
    </div>
  )
}

export default App
