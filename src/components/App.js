import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import Movies from "./Movies";
import Schedules from "./Schedules";
import Seats from "./Seats";
import FinalScreen from "./FinalScreen";

import "../reset.css"
import "../styles.css";

export default function App(){

    const [userData, setUserData] = useState({
        title: "",
        img: "",
        day: "",
        schedule: "",
        seats: [],
        name: "",
        cpf: ""
    });
    return (
        <BrowserRouter>
            <Header /> {/* OK */}
            <Routes>
                <Route path="/" element={<Movies/>}></Route> {/* OK */}
                <Route path="/schedules/:scheduleId" element={<Schedules userData={userData} setUserData={setUserData} />}></Route> {/* OK */}
                <Route path="/seats/:seatId" element={<Seats userData={userData} setUserData={setUserData} />}></Route> {/* OK */}
                <Route path="/finalscreen" element={<FinalScreen userData={userData} setUserData={setUserData} />}></Route> {/* OK */}
            </Routes>
        </BrowserRouter>      
    )
}