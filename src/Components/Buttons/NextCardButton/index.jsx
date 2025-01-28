import {Link, useParams} from "react-router-dom";

function NextCardButton({text}) {
    const {id} = useParams();

    function handleClickFetch() {
        fetch(`link${id}`), {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className="next-card">
            <button onClick={handleClickFetch} className="text-1xl px-4 py-2 bg-black text-white rounded hover:bg-gray-500">{text}</button>
        //TERNARY STATEMENT FOR WHEN NO MORE CARDS
        </div>
    )
}

export default NextCardButton;