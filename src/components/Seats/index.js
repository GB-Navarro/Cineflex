import { useParams } from "react-router-dom";
import styled from "styled-components";
export default function Seats() {
    const parametros = useParams();
    console.log(parametros);
    return (
        <>
            <section>
                <Tittle className="componentTittle"> Selecione o(s) assento(s) </Tittle>
                <Chairs>
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                    <Chair />
                </Chairs>
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
                            <Input placeholder="Digite seu nome..."></Input>
                        </InputsContainer>
                    </div>
                    <div className="buyerCPF">
                        <InputsContainer>
                            <p>CPF do comprador:</p>
                            <Input placeholder="Digite seu CPF..."></Input>
                        </InputsContainer>
                    </div>
                </div>
                <ButtonContainer>
                    <ButtonBox>
                        <p> Reservar assento(s) </p> {/*Transformar o p em um button*/}
                    </ButtonBox>
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
function Chair() {
    return (
        <>
            <Seat>
                <p>01</p>
            </Seat>
        </>
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
    background-color: #C3CFD9;
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