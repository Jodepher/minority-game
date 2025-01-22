import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Header from "../../Components/Header/index.jsx";

function Play() {
    const { id } = useParams()
    const [cardId, setCardId] = useState([])

    useEffect(() => {
        fetch(`link ${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // const card = data.card
                // setCardId(card.id)
            })
    }, [id]);

    return (
        <div>
            <Header />
            {/*    <button> for DRAW NEXT */}
            {/*    {cards.map(card => <img key={card.id}>>{card.id}</>*/}
        </div>
    )
}

export default Play