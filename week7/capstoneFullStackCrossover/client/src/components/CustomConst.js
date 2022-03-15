import DisplayCustCards from './DisplayCustCards.js';

export default function CustomConst(props) {
    return(
        <div>
            <div id="constFlex">
                <input type="text" id="cardName" className="constInput" placeholder="Enter your cards name" onChange={() => props.checkDisable()}></input>
                <input type="text" id="custURL" className="constInput" placeholder="Enter your cards image URL" onChange={() => props.checkDisable()}></input>
                <input type="number" id="custQuan" className="constInput" placeholder="Enter your card quantity" onChange={() => props.checkDisable()}></input>
                <input type="text" id="custDeckName" className="constInput" placeholder="Enter the card deck name" onChange={() => props.checkDisable()}></input>
                <button className="constBtn" onClick={() => {
                    props.insertData();
                    props.getCustomDeck();
                }} disabled={props.disable}>Submit</button>
                <button id="updateBtn" className="constBtn" onClick={() => props.toggleUpdate()}>Edit Quantity</button>
            </div>
            <div className="gridContainer">
                <DisplayCustCards
                    togUpdate = {props.togUpdate}
                    updateCard = {props.updateCard}
                    deleteCard = {props.deleteCard}
                />
            </div>
        </div>
    );
}