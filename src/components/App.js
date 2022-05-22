import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Movies from "./Movies";
import Schedules from "./Schedules";
import Seats from "./Seats";
import FinalScreen from "./FinalScreen";

import "../reset.css"
import "../styles.css";

export default function App() {

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
            <Routes>
                <Route path="/" element={<Movies />}></Route>
                <Route path="/schedules/:scheduleId" element={<Schedules userData={userData} setUserData={setUserData} />}></Route>
                <Route path="/seats/:seatId" element={<Seats userData={userData} setUserData={setUserData} />}></Route>
                <Route path="/finalscreen" element={<FinalScreen userData={userData} setUserData={setUserData} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}