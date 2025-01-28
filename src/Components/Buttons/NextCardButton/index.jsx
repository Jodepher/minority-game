import {Link, useParams} from "react-router-dom";
import {useState} from "react";
import Card from "../../Card/index.jsx";

function NextCardButton({text}) {
    const {id} = useParams();
    const [currentCard, setCurrentCard] = useState(null);
    const [moreCards, setMoreCards] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    function handleClickFetch() {
        if (!moreCards) return setIsLoading(true);

        fetch(`link${id}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            if (data.card) {
                setCurrentCard(data.card);
            } else {
                setMoreCards(false);
            }
        })
            .catch((err) => {
                console.error("Error getting card ", err);
            })
    }

    return (
        <div className="next-card">
            <button onClick={handleClickFetch}
                    className={`text-1xl px-4 py-2${
                        moreCards ? "bg-orange-700" : "bg-orange-300"
                    } text-white rounded hover:bg-gray-500`}
                    disabled={!moreCards || isLoading}
                    >
                {isLoading ? "Loading..." : moreCards ? {text} : "No more cards"}
                    </button>
        </div>
    )
}

export default NextCardButton;