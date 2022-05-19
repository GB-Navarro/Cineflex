import styled from "styled-components";

export default function FinalScreen(){
    return(
        <>
            <section>
                <ConfirmationMessage> Pedido feito com sucesso! </ConfirmationMessage>
                <ConfirmationInfos>
                    <InfosContainer>
                        <h1>Filme e Sessão</h1>
                        <p>Enola Holmes</p>
                        <p>24/06/2021 15:00</p>
                    </InfosContainer>
                    <InfosContainer>
                        <h1>Ingressos</h1>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </InfosContainer>
                    <InfosContainer>
                        <h1>Comprador</h1>
                        <p>Nome: Gabriel da Silva Navarro</p>
                        <p>CPF: 982.293.000-00</p>
                    </InfosContainer>
                </ConfirmationInfos>
                <ButtonContainer>
                    <ButtonBox>
                        <p> Voltar pra Home </p> {/* Transformar o p em button */}
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