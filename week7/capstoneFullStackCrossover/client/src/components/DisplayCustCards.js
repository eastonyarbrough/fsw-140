import { useContext } from 'react';
import { DeckContext } from '../App.js'

export default function DisplayCards(props) {
    const deck = useContext(DeckContext);
    
    if (props.togUpdate === false) {
        return(
            deck.map(e => {
                return(
                    <div>
                        <img src={e.img_url} alt={e.card_name}></img>
                        <h3>Quantity: {e.card_count}</h3>
                        <button onClick={() => props.deleteCard(e.card_name)}>Delete Card</button>
                    </div>
                );
            })
        );
    }
    else if (props.togUpdate === true) {
        return(
            deck.map((e, i) => {
                return(
                    <div>
                        <img src={e.img_url} alt={e.card_name}></img>
                        <label>Enter New Quantity</label>
                        <input type='number' id={`newQuan${i}`} defaultValue={e.card_count}></input>
                        <button onClick={() => props.updateCard(e.card_name, document.querySelector(`#newQuan${i}`).value)}>Update</button>
                    </div>
                );
            })
        );
    }
}