import { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Wallet from "./Wallet";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [endOfColl, setEndOfColl] = useState(null)
  const [currentBalance, setCurrentBalance] = useState(100)
  const [totalEaten, setTotalEaten] = useState(0)
  
  const fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(collection => setSushi(collection))
  }

  useEffect(() => {
    fetchSushi()
  }, [])

  useEffect(() => {
    setEndOfColl(sushi.length - 1)
  }, [sushi])

  const reloadSushi = () => {
    console.log('reload')
  }

  const handleEat = (id) => {
    fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
    setTotalEaten(current => current + 1)
  }

  return (
    <div className="app">
      <Wallet />
      <SushiContainer sushi={sushi} endOfColl={endOfColl} handleEat={handleEat} reloadSushi={reloadSushi}/>
      <Table currentBalance={currentBalance} totalEaten={totalEaten}/>
    </div>
  );
}

export default App;
