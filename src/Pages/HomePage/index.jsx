import PlayButton from "../../Components/PlayButton/index.jsx";
import CardsButton from "../../Components/CardsButton/index.jsx";
import CreateButton from "../../Components/CreateButton/index.jsx";

function HomePage() {
    return (
        <>
        <div id="top"></div>
            <div>
                <h1 className="text-7xl pt-28 pb-8">Minority</h1>
                <p className="pb-38">the controversial card game</p>
            </div>
            <br></br>
            <div id="buttons" className="container m-auto flex flex-col items-center space-y-10 2 pb-32 pt-20">
                <PlayButton className="text-center text-2xl" link="/play" text="PLAY"></PlayButton>
                <div className="flex space-x-12">
                    <CardsButton link="/cards" text="CARDS"></CardsButton>
                    <CreateButton link="/create" text="CREATE"></CreateButton>
                </div>
            </div>

            <div id="instructions" className="">
                <h2 className="text-2xl pb-6">Instructions</h2>
                <p className="pb-12">The party game Minority requires a minimum of 3 players who are ready to debate over deliberately
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