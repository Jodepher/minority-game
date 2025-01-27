
function Card({id, description}) {

    return (

        <div className="card border rounded-lg shadow-sm bg-white text-black font-serif">
            <p>{id}</p>
            <p>{description}</p>
        </div>
    )
}

export default Card;