import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import axios from "axios";
import styled from 'styled-components';

import Header from "../Header";
import Footer from "../Footer";

export default function Schedules(props) {

    const { scheduleId } = useParams();
    const [elements, setElements] = useState([])

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
            <Header></Header>
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
function Schedule(props) {
    return (
        <>
            <div>
                <ScheduleInfo>
                    <p>{props.weekday} - {props.date}</p>
                    <SchedulesContainer>
                        {
                            props.showtimes.length > 0 ?
                                props.showtimes.map((showtime) => {
                                    return (
                                        <>
                                            <Link to={`/seats/${showtime.id}`}>
                                                <ScheduleBox>{showtime.name}</ScheduleBox>
                                            </Link>
                                        </>
                                    )
                                })
                                :
                                <></>
                        }
                    </SchedulesContainer>
                </ScheduleInfo>
            </div>
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

const ScheduleInfo = styled.div`
    margin-left: 5vw;
    margin-bottom:25px;

    p{
        color:#293845;
        font-size:18px;
    }
`
const SchedulesContainer = styled.div`
    display:flex;
`

const ScheduleBox = styled.span`
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-top:25px;
    margin-right:10px;

    p{
        font-size:18px;
        color: #FFFFFF;
    }
`