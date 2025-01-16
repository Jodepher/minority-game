import PlayButton from "../../Components/PlayButton/index.jsx";
import CardsButton from "../../Components/CardsButton/index.jsx";
import CreateButton from "../../Components/CreateButton/index.jsx";

function HomePage() {
    return (
        <>
            <div id={"top"} className="title" >
                <h1>Minority Game</h1>
                <p>tagline</p>
            </div>

            <div id={"buttons"} className="buttons">
                <PlayButton link="/play" text="PLAY"></PlayButton>
                <CardsButton link="/cards" text="CARDS"></CardsButton>
                <CreateButton link="/create" text="CREATE"></CreateButton>
            </div>

            <div id={"instructions"} className="cards">
                <h2>Instructions</h2>
                <p>The party game Minority requires a minimum of 3 players who are ready to debate over deliberately
                    controversial topics.<br></br>
                    The aim of the game is to read aloud one of the selected cards that will be presented to you (or come up with your
                    own) and decide if you agree or disagree with the statement.<br></br>
                    Give everyone 5-10 seconds to have a think about where their loyalties lie, and how willing they are to
                    defend their corner, then repeat the statement and raise your hand if you agree.<br></br>
                    Anyone in the <b>Minority</b> group loses! And now the floor is open for debate...<br></br>
                    Have fun arguing!
                </p>
            </div>
        </>
    )}

export default HomePage