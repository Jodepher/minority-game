import PlayButton from "../../Components/PlayButton/index.jsx";
import CardsButton from "../../Components/CardsButton/index.jsx";
import CreateButton from "../../Components/CreateButton/index.jsx";

function HomePage() {
    return (
        <>
            <div id="top">
                <h1 className="text-6xl pt-28 pb-12">Minority Game</h1>
                <p className="pb-38">tagline</p>
            </div>
            <br></br>
            <div id="buttons" className="pb-28 pt-20 flex">
                <PlayButton className="pb-8" link="/play" text="PLAY"></PlayButton>
                <CardsButton className=" " link="/cards" text="CARDS"></CardsButton>
                <CreateButton className=" " link="/create" text="CREATE"></CreateButton>
            </div>

            <div id="instructions" className="cards">
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