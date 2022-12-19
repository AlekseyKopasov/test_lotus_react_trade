import './App.scss'
import Header from './components/Header/Header'
import BiddingTable from './components/BiddingTable/BiddingTable'

const App = () => {
  return (
    <div className="App">
      <Header/>

      <main>
        <BiddingTable/>
      </main>
    </div>
  )
}

export default App
