import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import styled from 'styled-components';

import Header from "../Header";
import Footer from "../Footer";

import Schedule from "./functions/Schedule";

export default function Schedules(props) {

    const [elements, setElements] = useState([])
    const { scheduleId } = useParams();
    //const history = useHistory();
    /*const returnToMovies = () => {
        history.push('/movies')
    }*/

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${scheduleId}/showtimes`);
        promisse.then((response) => {
            props.setUserData({
                ...props.userData,
                title: response.data.title,
                img: response.data.posterURL
            })
            const { data } = response;
            setElements(data.days);
        })
    }, [])

    return (
        <>
            <Header>
                <div>
                    <BackButton> Voltar </BackButton>
                </div>
            </Header>
            <section>
                <TittleBox>
                    <h1> Selecione o horário </h1>
                </TittleBox>
                {elements.length > 0 ?
                    elements.map((elemento) => {
                        return (
                            <>
                                <Schedule key={elemento.id} weekday={elemento.weekday} date={elemento.date} showtimes={elemento.showtimes} />
                            </>
                        );
                    })
                    : <></>
                }

            </section>
            <Footer>
                <ImgContainer>
                    <div>
                        <img src={props.userData.img} alt="Capa do filme" />
                    </div>
                </ImgContainer>
                <TextContainer>
                    <p>{props.userData.title}</p>
                </TextContainer>
            </Footer>

        </>
    );
}


const TittleBox = styled.div`
    display:flex;
    justify-content: center;
    margin: 50px 0px 50px 0px;

    h1{
        color: #293845;
        font-size: 24px;
    }
`

const ImgContainer = styled.div`
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

const TextContainer = styled.div`
    display:flex;
    align-items: center;
    color:#293845;
    font-size: 20px;

    p{
        margin-left:14px;
    }
`

const BackButton = styled.button`
    background-color: #E8833A;
    color: #FFFFFF;
    font-weight: bold;
    border: 1px solid #E8833A;
    border-radius: 5px;
`