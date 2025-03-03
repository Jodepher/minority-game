import Header from "../../Components/Header/index.jsx";
import {useParams} from "react-router-dom";

function Create() {
    const {id} = useParams();

    return (
        <div className="create-page">
            <Header />

        </div>
    )
}

export default Create;