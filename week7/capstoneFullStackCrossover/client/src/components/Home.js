export default function Home() {
    return(
        <div id='mainFlex'>
            <div>
                <h1>Welcome to my Magic the Gathering decks display!</h1>
            </div>
            <div>
                <h2>Below I have listed the purpose of each deck. To see details of each deck including the cards and quantity of each card please select the deck from above.</h2>
            </div>
            <div>
                <div className='descrip'>
                    <h2>Squirrel Deck</h2>
                    <p>The purpose of the Squirrel Deck was to make a funny deck that was actually feasible to play against an opponent. This deck focuses on creating a lot of squirrel creatures, buffing them and even sacrificing some to create more of them. In other words the Squirrel Deck is a token deck. This deck has a slogan which is "I'm just a squirrel trying to get a nut."</p>
                </div>
                <div className='descrip'>
                    <h2>Da Yeet Fleet Deck</h2>
                    <p>The purpose of Da Yeet Fleet Deck was to make Vehicle cards an actual threat to the opponent as Vehicle cards are notorius for being weak. In Da Yeet Fleet Deck I decided to pair Vehicles with the mechanic Exalted. This greatly increases the already slighly buffed Vehicles to a ridiculous amount of power. I like to think of this deck as "turbo charged".</p>
                </div>
                <div className='descrip'>
                    <h2>Ricochet Deck</h2>
                    <p>This deck's purpose was to essentially break the game. It was made from the saying "You're rubber. I'm glue. Whatever you say bounces off me and sticks back to you." and it achieves this goal perfectly. The Ricochet Deck is very good at redirecting damage back to the opponent, thus preventing the opponent from being capable of winning.</p>
                </div>
            </div>
        </div>
    );
}