import {Link} from "react-router-dom";

function PlayButton({link, text}) {
        return (
            <div>
                <Link to={link} className="text-2xl px-4 py-2 bg-black text-white rounded hover:bg-gray-500">{text}</Link>
            </div>
        )
}

export default PlayButton