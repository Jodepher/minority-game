import {Link} from "react-router-dom";


function CreateButton({link, text}) {

    return (
        <div>
            <Link to={link} className="text-1xl px-4 py-2 bg-black text-white rounded hover:bg-gray-500">{text}</Link>
        </div>
       )
}

export default CreateButton