import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import "./style.css";

import Header from "../Header";
import Footer from "../Footer";

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
            props.setUserData({
                ...props.userData,
                schedule: response.data.name,
                day: response.data.day.date
            })
            setElements(response.data.seats);
        })
        promisse.catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <>
            <Header></Header>
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
                                            data={data} selectedSeats={selectedSeats}
                                            setSelectedSeats={setSelectedSeats} selectedSeatsId={selectedSeatsId}
                                            setSelectedSeatsId={setSelectedSeatsId} />
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
                        <IconContainer>
                            <Selected></Selected>
                        </IconContainer>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <IconContainer>
                            <Available></Available>
                        </IconContainer>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <IconContainer>
                            <Unavailable></Unavailable>
                        </IconContainer>
                        <p>Indisponível</p>
                    </div>
                </Description>
                <div className="buyer">
                    <div className="buyerName">
                        <InputsContainer>
                            <p>Nome do comprador:</p>
                            <Input placeholder="Digite seu nome..." onChange={(e) => {
                                setName(e.target.value);
                                props.setUserData({
                                    ...props.userData,
                                    name: name
                                })
                            }}></Input>
                        </InputsContainer>
                    </div>
                    <div className="buyerCPF">
                        <InputsContainer>
                            <p>CPF do comprador:</p>
                            <Input placeholder="Digite seu CPF..." onChange={(e) => {
                                setCpf(e.target.value);
                                props.setUserData({
                                    ...props.userData,
                                    cpf: cpf
                                })
                            }}></Input>
                        </InputsContainer>
                    </div>
                </div>
                <ButtonContainer>
                    <Link to={`/finalscreen`}>
                        <ButtonBox onClick={() => {
                            const postPromisse = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, data);
                            postPromisse.then((response) => {
                                props.setUserData({
                                    ...props.userData,
                                    seats: selectedSeatsId
                                })
                            })
                            postPromisse.catch((error) => {
                                console.log(error);
                            })
                        }}>
                            <Button> Reservar assento(s) </Button>
                        </ButtonBox>
                    </Link>
                </ButtonContainer>
            </section>
            <Footer>
                <RowContainer>
                    <div>
                        <img src={props.userData.img} alt="Capa do filme" />
                    </div>
                </RowContainer>
                <ColumnContainer>
                    <p>{props.userData.title}</p>
                    <p>{props.userData.day} - {props.userData.schedule}</p>
                </ColumnContainer>
            </Footer>
        </>
    )
}
function Chair(props) {
    return (
        <>
            <Seat className={props.isAvailable === true ? (verifyArray(props.selectedSeats, props.id) ? "selected" : "available") : "unavailable"} onClick={() => {
                if (props.isAvailable === true) {
                    if (verifyArray(props.selectedSeats, props.id) === false) {
                        props.setSelectedSeats([...props.selectedSeats, props.id]);
                    } else {
                        removeElement(props.selectedSeats, props.id, props.setSelectedSeats);
                    }
                    if (verifyArray(props.selectedSeatsId, props.name) === false) {
                        props.setSelectedSeatsId([...props.selectedSeatsId, props.name]);
                    } else {
                        props.setSelectedSeatsId(
                            props.selectedSeatsId.filter((e) => e != props.name)
                        );
                    }
                } else {
                    alert("Esse assento não está disponível");
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

const IconContainer = styled.div`
    display:flex;
    justify-content: center;
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
        margin-left: 14px;
        margin-top: 7px;
    }
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        margin-bottom:15px;
    }
`

const Input = styled.input`
    width:75vw;
    height: 5vh;
    margin-bottom:20px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`

const ButtonBox = styled.div`
    width:225px;
    height: 42px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top:50px;
`

const Button = styled.button`
    width:100%;
    height:100%;
    background-color: #E8833A;
    font-size:18px;
    color:#FFFFFF;
    border: 1px solid #E8833A;
`