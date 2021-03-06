import { Link } from "react-router-dom";

import styled from "styled-components";

import Header from "../Header";

export default function FinalScreen(props) {
    return (
        <>
            <Header>
                <div>
                    <BackButton> Voltar </BackButton>
                </div>
            </Header>
            <section>
                <ConfirmationMessage> Pedido feito com sucesso! </ConfirmationMessage>
                <ConfirmationInfos>
                    <InfosContainer>
                        <h1>Filme e Sessão</h1>
                        <p>{props.userData.title}</p>
                        <p>{props.userData.day} {props.userData.Schedule}</p>
                    </InfosContainer>
                    <InfosContainer>
                        <h1>Ingressos</h1>
                        {
                            props.userData.seats.length > 0 ?
                                props.userData.seats.map((element) => {
                                    return (
                                        <>
                                            <p>Assento {element}</p>
                                        </>
                                    )
                                })
                                :
                                <></>
                        }
                    </InfosContainer>
                    <InfosContainer>
                        <h1>Comprador</h1>
                        <p>Nome: {props.userData.name}</p>
                        <p>CPF: {props.userData.cpf}</p>
                    </InfosContainer>
                </ConfirmationInfos>
                <ButtonContainer>
                    <ButtonBox>
                        <Link to="/">
                            <Button> Voltar pra Home </Button>
                        </Link>
                    </ButtonBox>
                </ButtonContainer>
            </section>

        </>
    );
}

const ConfirmationMessage = styled.h1`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    color:#247A6B;
    font-weight: bold;
    font-size: 20px;
`

const ConfirmationInfos = styled.div`
    margin-left:29px;

    h1{
        font-size:20px;
        font-weight: bold;
    }
`

const InfosContainer = styled.div`
    margin-bottom:30px;

    h1{
        margin-bottom:10px;
        color:#293845;
    }

    p{
        margin-bottom:5px;
        color:#293845;
        font-size:22px;
    }
`

const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
`

const ButtonBox = styled.div`
    width: 75vw;
    height: 5vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    color: #FFFFFF;
    margin-top:75px;
`
const Button = styled.button`
    width:100%;
    height:100%;
    background-color: #E8833A;
    font-size:18px;
    color:#FFFFFF;
    border: 1px solid #E8833A;
`

const BackButton = styled.button`
    background-color: #E8833A;
    color: #FFFFFF;
    font-weight: bold;
    border: 1px solid #E8833A;
    border-radius: 5px;
`