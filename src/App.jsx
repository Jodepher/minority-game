import Footer from "./Components/Footer/index.jsx";
import './index.css';
import HomePage from "./Pages/HomePage/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Play from "./Pages/Play/index.jsx";
import Create from "./Pages/Create/index.jsx";
import Cards from "./Pages/Cards/index.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="cards" element={<Cards />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App