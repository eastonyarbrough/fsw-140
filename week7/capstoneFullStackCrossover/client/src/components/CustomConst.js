import DisplayCustCards from './DisplayCustCards.js';

export default function CustomConst(props) {
    return(
        <div>
            <div>
                <input type="text" id="cardName" placeholder="Enter your cards name" onChange={() => props.checkDisable()}></input>
                <input type="text" id="custURL" placeholder="Enter your cards image URL" onChange={() => props.checkDisable()}></input>
                <input type="number" id="custQuan" placeholder="Enter your card quantity" onChange={() => props.checkDisable()}></input>
                <input type="text" id="custDeckName" placeholder="Enter the card deck name" onChange={() => props.checkDisable()}></input>
                <button onClick={() => {
                    props.insertData();
                    props.getCustomDeck();
                }} disabled={props.disable}>Submit</button>
            </div>
            <div>
                <DisplayCustCards/>
            </div>
        </div>
    );
}