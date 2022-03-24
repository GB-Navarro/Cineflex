import Header from "./Header";
import Filmes from "./Filmes";
import Horarios from "./Horarios";
import Assentos from "./Assentos";
import TelaFinal from "./TelaFinal";
import Footer from "./Footer";
import "./reset.css"
import "./styles.css";

export default function App(){
    return (
        <>
            <Header />
            {/*<Filmes />*/}
            {/*<Horarios />*/}
            <Assentos />
            {/*<TelaFinal />*/}
            <Footer />
        </>
    )
}