import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../Components/Header/index.jsx";
import Card from "../../Components/Card/index.jsx";
import Cards from "../Cards/index.jsx";
import NextCardButton from "../../Components/Buttons/NextCardButton/index.jsx";

function Play() {
    const { id } = useParams()
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`link ${id}`)
            .then(res => res.json())
            .then(data => {
                setCards(data)
            })
    }, [id]);

    return (
        <div>
            <Header />
            <section className="m-2.5 p-2">
                {Cards.length > 0 ? (
                    cards.map(card => <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description} />)
                    ) : (
                        <p className="pb-20 font-sans motion-preset-oscillate motion-duration-2000">Loading...</p>
                    )}
            </section>
            <NextCardButton text={"Next Card"} />
        </div>
    )
}

export default Play