import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../Components/Header/index.jsx";
import Card from "../../Components/Card/index.jsx";
import card from "../../Components/Card/index.jsx";
import Cards from "../Cards/index.jsx";

function Play() {
    const { id } = useParams()
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`link ${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // const card = data.card
                // setCardId(card.id)
            })
    }, [id]);

    // OR could do
    // function fetchCard() {
    //         fetch(`link ${id}`)
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 // const card = data.card
    //                 // setCardId(card.id)
    // }
    // useEffect(fetchCard, [])
    //
    // function nextCard() {
    //      return (
    //          <
    //


    return (
        <div>
            <Header />
            <section className="m-2.5 p-2">
                {Cards.length > 0 ? (
                    cards.map(card => <Card
                            key={card.id}
                            id={card.id}
                            description={card.description} />)
                    ) : (
                        <p className="pb-20 text-amber-800 font-sans motion-preset-oscillate motion-duration-2000">Loading...</p>
                    )}
            </section>
        </div>
    )
}

export default Play