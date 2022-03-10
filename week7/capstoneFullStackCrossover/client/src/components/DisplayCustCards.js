import { useContext } from 'react';
import { DeckContext } from '../App.js'

export default function DisplayCards() {
    const deck = useContext(DeckContext);
    
    return(
        deck.map(e => {
            return(
                <div>
                    <img src={e.img_url} alt={e.card_name}></img>
                    <h3>Quantity: {e.card_count}</h3>
                </div>
            );
        })
    );
}