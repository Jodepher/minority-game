import Footer from "./Components/Footer/index.jsx";
import './index.css';
import HomePage from "./Pages/HomePage/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Play from "./Pages/Play/index.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/play" element={<Play />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App