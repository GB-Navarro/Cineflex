import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Filmes from "./Filmes";
import Horarios from "./Horarios";
import Assentos from "./Assentos";
import TelaFinal from "./TelaFinal";
import Footer from "./Footer";
import Testes from "./Testes";
import "./reset.css"
import "./styles.css";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Filmes />}></Route>
                <Route path="/horarios" element={<Horarios />}></Route>
                <Route path="/assentos" element={<Assentos />}></Route>
                <Route path="/telafinal" element={<TelaFinal />}></Route>
                {/*<Testes />*/}
                {/*<Footer />*/}
            </Routes>
        </BrowserRouter>      
    )
}