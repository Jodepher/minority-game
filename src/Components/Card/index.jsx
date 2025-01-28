
function Card({id, title, description}) {

    return (

        <div className="card border rounded-lg shadow-sm bg-white text-black font-serif">
            <small>{id}</small>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;