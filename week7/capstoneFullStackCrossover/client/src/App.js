import { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import DisplayCards from './components/DisplayCards.js';
import CustomConst from './components/CustomConst.js';
import './App.css';

export const DeckContext = createContext();

function App() {
  const [deck, setDeck] = useState([]);
  const [disable, setDisable] = useState(true);

  const getSquirrel = () => {
    fetch('/getSquirrel')
      .then(res => res.json())
      .then(res => setDeck(res))
      .catch(err => console.log(err))
  }

  const getDaYeetFleet = () => {
    fetch('/getDaYeetFleet')
      .then(res => res.json())
      .then(res => setDeck(res))
      .catch(err => console.log(err))
  }

  const getRicochet = () => {
    fetch('/getRicochet')
      .then(res => res.json())
      .then(res => setDeck(res))
      .catch(err => console.log(err))
  }

  const insertData = () => {
    fetch('/insertData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        card_name: document.querySelector('#cardName').value,
        img_url: document.querySelector('#custURL').value,
        colors: "Custom Entry",
        mana_cost: 0,
        description: "Custom Entry",
        card_count: document.querySelector('#custQuan').value,
        deck: document.querySelector('#custDeckName').value
      })
    })
      .then(res => res.json())
      .then(res => setDeck(res))
      .catch(err => console.log(err))
  }

  const getCustomDeck = () => {
    fetch(`/get/${document.querySelector('#custDeckName').value}`)
      .then(res => res.json())
      .then(res => setDeck(res))
      .catch(err => console.log(err))
  }

  const checkDisable = () => {
    if (document.querySelector('#cardName').value === "" || document.querySelector('#custURL').value === "" || document.querySelector('#custQuan').value === "" || document.querySelector('#custDeckName').value === "") {
      setDisable(true);
    }
    else {
      setDisable(false);
    }
  }

  return (
    <BrowserRouter>
      <DeckContext.Provider value={deck}>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/squirrel' onClick={() => getSquirrel()}>Squirrel Deck</Link>
          <Link to='/dayeetfleet' onClick={() => getDaYeetFleet()}>Da Yeet Fleet Deck</Link>
          <Link to='/ricochet' onClick={() => getRicochet()}>Ricochet Deck</Link>
          <Link to='/custom' onClick={() => setDeck([])}>Show Me Your Deck!</Link>
        </nav>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/squirrel' element={<DisplayCards/>}></Route>
            <Route exact path='/dayeetfleet' element={<DisplayCards/>}></Route>
            <Route exact path='/ricochet' element={<DisplayCards/>}></Route>
            <Route exact path='/custom' element={<CustomConst
              insertData = {insertData}
              getCustomDeck = {getCustomDeck}
              checkDisable = {checkDisable}
              disable = {disable}
            />}></Route>
          </Routes>
        </main>
      </DeckContext.Provider>
    </BrowserRouter>
  );
}

export default App;
