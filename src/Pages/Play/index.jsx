import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Play() {
    const { id } = useParams()
    const [cardId, setCardId] = useState("")

    useEffect(() => {
        fetch(`link ${id}`)
            .then(res => res.json())
            .then(data => {
                const card = data.data.card
                setCardId(card.id)
            })
    }, [id]);

    return (
        <div>
        {/*    <button> for DRAW NEXT */}
        </div>
    )
}

export default Play