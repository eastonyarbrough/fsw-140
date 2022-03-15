import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import DisplayCards from './components/DisplayCards.js';
import CustomConst from './components/CustomConst.js';
import hm from './images/hm.png';
import hmX from './images/hmX.png';
import './App.css';

export const DeckContext = createContext();

function App() {
  const [deck, setDeck] = useState([]);
  const [disable, setDisable] = useState(true);
  const [togUpdate, setTogUpdate] = useState(false);
  const [togLinks, setTogLinks] = useState(false);

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

  const toggleUpdate = () => {
    if (togUpdate === false) {
      setTogUpdate(true);
      document.querySelector('#updateBtn').style = 'display: none';
    }
    else if (togUpdate === true) {
      setTogUpdate(false)
      document.querySelector('#updateBtn').style = 'display: inline'
    }
  }

  const updateCard = (cardName, newQuan) => {
    fetch(`/updateCard/${cardName}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ card_count: newQuan })
    })
    toggleUpdate();
    getCustomDeck();
  }

  const deleteCard = (cardName) => {
    fetch(`/deleteCard/${cardName}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    getCustomDeck();
  }

  const displayLinks = () => {
    if (togLinks === false) {
      if (window.innerWidth < 768) {
        document.querySelector('#hmLinks').style = 'display: inline-block';
        document.querySelector('#hm').style = 'display: none';
        setTogLinks(true);
      }
      else {
        document.querySelector('#hmLinks').style = 'display: none';
        document.querySelector('#hm').style = 'display: none';
        setTogLinks(false);
      }
    }
    else if (togLinks === true) {
      if (window.innerWidth < 768) {
        document.querySelector('#hmLinks').style = 'display: none';
        document.querySelector('#hm').style = 'display: inline-block';
        setTogLinks(false);
      }
      else {
        document.querySelector('#hmLinks').style = 'display: none';
        document.querySelector('#hm').style = 'display: none';
        setTogLinks(false);
      }
    }
  }

  return (
    <BrowserRouter>
      <DeckContext.Provider value={deck}>
        <div id='hm'>
          <img src={hm} alt='hmIcon' onClick={() => displayLinks()}></img>
        </div>
        <div id='hmLinks'>
          <div id='hmFlex'>
            <img src={hmX} alt='hmXIcon' id='hmX' onClick={() => displayLinks()}></img>
            <Link to='/'>Home</Link>
            <Link to='/squirrel' onClick={() => getSquirrel()}>Squirrel Deck</Link>
            <Link to='/dayeetfleet' onClick={() => getDaYeetFleet()}>Da Yeet Fleet Deck</Link>
            <Link to='/ricochet' onClick={() => getRicochet()}>Ricochet Deck</Link>
            <Link to='/custom' onClick={() => setDeck([])}>Create A Deck!</Link>
          </div>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/squirrel' onClick={() => getSquirrel()}>Squirrel Deck</Link>
          <Link to='/dayeetfleet' onClick={() => getDaYeetFleet()}>Da Yeet Fleet Deck</Link>
          <Link to='/ricochet' onClick={() => getRicochet()}>Ricochet Deck</Link>
          <Link to='/custom' onClick={() => setDeck([])}>Create A Deck!</Link>
        </nav>
        <main>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
          <div className='gridContainer'>
            <Routes>
              <Route exact path='/squirrel' element={<DisplayCards/>}></Route>
              <Route exact path='/dayeetfleet' element={<DisplayCards/>}></Route>
              <Route exact path='/ricochet' element={<DisplayCards/>}></Route>
            </Routes>
          </div>
          <Routes>
            <Route exact path='/custom' element={<CustomConst
              insertData = {insertData}
              getCustomDeck = {getCustomDeck}
              checkDisable = {checkDisable}
              disable = {disable}
              toggleUpdate = {toggleUpdate}
              togUpdate = {togUpdate}
              updateCard = {updateCard}
              deleteCard = {deleteCard}
            />}></Route>
          </Routes>
        </main>
      </DeckContext.Provider>
    </BrowserRouter>
  );
}

export default App;
