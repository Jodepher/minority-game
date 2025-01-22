import {NavLink} from "react-router-dom";

function NavBar() {

    return (
        <div className="nav-bar">
            <nav className="flex flex-row justify-between m-0.5 p-0.5">
                <NavLink className="border rounded bg-orange-400 p-1.5" to="/">Home</NavLink>
                <h1 className="text-2xl">Minority</h1>
                <NavLink className="border rounded bg-orange-400 p-1.5" to="/create">Create</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;