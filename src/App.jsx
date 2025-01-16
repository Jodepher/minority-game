import Footer from "./Components/Footer/index.jsx";
import './index.css';
import HomePage from "./Pages/HomePage/index.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                   <Route path="/" element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App