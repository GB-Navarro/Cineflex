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
                        <div className="inputsBox">
                            <p>Nome do comprador:</p>
                            <input className="seatsInput" placeholder="Digite seu nome..."></input>
                        </div>
                    </div>
                    <div className="buyerCPF">
                        <div className="inputsBox">
                            <p>CPF do comprador:</p>
                            <input className="seatsInput" placeholder="Digite seu CPF..."></input>
                        </div>
                    </div>
                </div>
                <div className="seatsBox">
                    <div className="seatsButton">
                        <p> Reservar assento(s) </p>
                    </div>
                </div>
            </section>
            <footer className="footerSeats">
                <div className="footerSeatsContainer">
                    <div className="footerSeatsImg">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Capa do filme"/>
                    </div>
                </div>
                <div className="footerSeatsBox">
                    <p className="textTop">Liga da Justiça</p>
                    <p>Quinta-feira - 15:00</p>
                </div>
            </footer>
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
