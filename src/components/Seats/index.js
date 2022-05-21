import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./style.css";
export default function Seats(props) {

    const SessionID = useParams();
    const [elements, setElements] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selectedSeatsId, setSelectedSeatsId] = useState([]);

    let data = {
        ids: selectedSeats,
        name: name,
        cpf: cpf
    }

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${SessionID.seatId}/seats`);
        promisse.then((response) => {
            props.setUserData({...props.userData,
                schedule: response.data.name,
                day: response.data.day.date
            })
            setElements(response.data.seats);
        })
        promisse.catch((err) => {
            console.log("Xabu");
        })
    }, [])
    return (
        <>
            <section>
                <Tittle className="componentTittle"> Selecione o(s) assento(s) </Tittle>
                {elements.length > 0 ?
                    <Chairs>
                        {
                            elements.map((element) => {
                                return (
                                    <>
                                        <Chair key={element.id} id={element.id} name={element.name}
                                            isAvailable={element.isAvailable}
                                            data={data} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} 
                                            selectedSeatsId={selectedSeatsId} setSelectedSeatsId={setSelectedSeatsId}/>
                                    </>
                                )
                            })
                        }
                    </Chairs>
                    :
                    <></>
                }
                <Description>
                    <div>
                        <Selected></Selected>
                        <p>Selecionado</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <Available></Available>
                        <p>Disponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <Unavailable></Unavailable>
                        <p>Indisponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                </Description>
                <div className="buyer">
                    <div className="buyerName">
                        <InputsContainer>
                            <p>Nome do comprador:</p>
                            <Input placeholder="Digite seu nome..." onChange={(e) => {
                                setName(e.target.value);
                                props.setUserData({...props.userData,
                                    name:name
                                })
                            }}></Input>
                        </InputsContainer>
                    </div>
                    <div className="buyerCPF">
                        <InputsContainer>
                            <p>CPF do comprador:</p>
                            <Input placeholder="Digite seu CPF..." onChange={(e) => {
                                setCpf(e.target.value);
                                props.setUserData({...props.userData,
                                    cpf:cpf
                                })
                            }}></Input>
                        </InputsContainer>
                    </div>
                </div>
                <ButtonContainer>
                    <Link to={`/finalscreen`}>
                        <ButtonBox onClick={() => {
                                const postPromisse = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`,data);
                                postPromisse.then((response) => {
                                    props.setUserData({...props.userData,
                                        seats: selectedSeatsId
                                    })
                                })
                                postPromisse.catch((error) => {
                                    console.log(error);
                                })
                            }}>
                            <p> Reservar assento(s) </p> {/*Transformar o p em um button*/}
                        </ButtonBox>
                    </Link>
                </ButtonContainer>
            </section>
            <Footer>
                <RowContainer>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Capa do filme" />
                    </div>
                </RowContainer>
                <ColumnContainer>
                    <p>Liga da Justiça</p>
                    <p>Quinta-feira - 15:00</p>
                </ColumnContainer>
            </Footer>
        </>
    )
}
function Chair(props) {
    return (
        <>
            <Seat className={props.isAvailable === true ? (verifyArray(props.selectedSeats, props.id) ? "selected" : "available") : "unavailable"} onClick={() => {
                if (verifyArray(props.selectedSeats, props.id) === false) {
                    props.setSelectedSeats([...props.selectedSeats, props.id]);
                } else {
                    removeElement(props.selectedSeats, props.id, props.setSelectedSeats);
                }
                if(verifyArray(props.selectedSeatsId, props.name) === false) {
                    props.setSelectedSeatsId([...props.selectedSeatsId, props.name]);
                }else{
                    props.setSelectedSeatsId(
                        props.selectedSeatsId.filter((e) => e != props.name)
                    );
                }
            }}>
                <p>{props.name}</p>
            </Seat>
        </>
    )
}
function verifyArray(array, id) {
    let result = array.find((e) => (e === id));
    if (result != undefined) {
        return true;
    } else {
        return false;
    }
}

function removeElement(array, element, setNewArray) {
    setNewArray(
        array.filter((e) => e != element)
    )
}
const Tittle = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size:24px;
    color:#293845;
`

const Chairs = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin: 0px 23px 0px 30px;
`

const Description = styled.div`
    display:flex;
    justify-content: space-evenly;

    p{
        font-size:13px;
        margin-bottom:50px;
    }
`
const Selected = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border-radius: 12px;
`
const Available = styled.div`
    width: 26px;
    height: 26px;
    background-color: #8DD7CF;
    border-radius: 12px;
`
const Unavailable = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border-radius: 12px;
`

const Seat = styled.div`
    width: 26px;
    height: 26px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-bottom:18px;
    margin-left:8px;
`

const Footer = styled.footer`
    width: 100vw;
    height: 15vh;
    background-color: #DFE6ED;
    display:flex;
    position:fixed;
    bottom:0;
`

const RowContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    div{
        width: 64px;
        height: 89px;
        max-width: 90%;
        max-height: 90%;
        background-color: #FFFFFF;
        display:flex;
        align-items: center;
        margin-left:10px;
        border-radius:3px;
    }
    img{
        width: 48px;
        height: 72px;
        margin:auto;
    }
`

const ColumnContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    
    p{
        color:#293845;
        margin:0px 14px 5px 0px;
    }
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width:327px;
    height: 25px;
    margin-bottom:14px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`

const ButtonBox = styled.div`
    width:225px;
    height: 42px;
    background-color: #E8833A;
    font-size:18px;
    color:#FFFFFF;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;
`