import {Link} from "react-router-dom";


function CreateButton({link, text}) {

    return (
        <div>
            <Link to={link} className="px-4 py-1 bg-black text-white rounded hover:bg-gray-500">{text}</Link>
        </div>
       )
}

export default CreateButton