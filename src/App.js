import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import Schedules from "./Schedules";
import Seats from "./Seats";
import FinalScreen from "./FinalScreen";

import "./reset.css"
import "./styles.css";

export default function App(){
    return (
        <BrowserRouter>
            <Header /> {/* OK */}
            <Routes>
                <Route path="/" element={<Movies />}></Route> {/* OK */}
                <Route path="/schedules/:scheduleId" element={<Schedules />}></Route> {/* OK */}
                <Route path="/seats/:seatId" element={<Seats />}></Route> {/* OK */}
                <Route path="/finalscreen/:finalscreenId" element={<FinalScreen />}></Route> {/* OK */}
            </Routes>
        </BrowserRouter>      
    )
}