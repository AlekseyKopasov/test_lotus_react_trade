import './App.scss'
import Header from './components/Header/Header'
import Timer from './components/Timer/Timer'
import BiddingTable from './components/BiddingTable/BiddingTable'

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Timer />

        <BiddingTable />
      </main>
    </div>
  )
}

export default App
