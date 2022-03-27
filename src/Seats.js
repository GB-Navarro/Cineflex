import FooterSeats from "./FooterSeats";
import { useParams } from "react-router-dom";
export default function Seats(){
    const parametros = useParams();
    console.log(parametros);
    return (
        <>
            <section>
                <h1 className="componentTittle"> Selecione o(s) assento(s) </h1>
                <div className="seats">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                </div>
                <div className="description">
                    <div>
                        <div className="selected"></div>
                        <p>Selecionado</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <div className="available"></div>
                        <p>Disponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <div className="unavailable"></div>
                        <p>Indisponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                </div>
                <div className="buyer">
                    <div className="buyerName">
                        <p>Nome do comprador:</p>
                        {/*Quando eu coloco input a tela some */}
                    </div>
                    <div className="buyerCPF">
                        <p>CPF do comprador:</p>
                        {/*Quando eu coloco input a tela some */}
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
            <FooterSeats />
        </>
    )
}
function Seat(){
    return (
        <>
            <div className="seat">
                <p>01</p>
            </div>
        </>
    )
}
