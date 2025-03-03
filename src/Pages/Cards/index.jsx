import Header from "../../Components/Header/index.jsx";
import Card from "../../Components/Card/index.jsx";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function Cards() {
    const { id } = useParams();
    const [allCards, setAllCards] = useState([]);

        useEffect(() => {
            fetch(`link{id}`)
                .then(res => res.json())
                .then(data => {
                    setAllCards(data);
                })
                .catch((err) => {
                    console.error("Error getting cards", err);
                })
        }, [])

        return (
            <div className="cards-page">
                <Header/>
                <section className="cards-display grid grid-cols-5 gap-y-20">
                    {allCards.map(card => {
                        return (
                            <Card
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                            />
                        // <Link to={`/cards/${card.id}`}</Link>
                        )
                    })}
                </section>
            </div>
        )
}

export default Cards;