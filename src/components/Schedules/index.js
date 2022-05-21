import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import styled from 'styled-components';


export default function Schedules(props){
    
    const {scheduleId} = useParams();
    const [elementos, setElementos] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${scheduleId}/showtimes`);
        promisse.then((response) => {
            props.setUserData({...props.userData,
                title: response.data.title,
            })
            const {data} = response;
            setElementos(data.days);
        })
    },[])

    return(
        <>
            <section>
                <TittleBox>
                    <h1> Selecione o horário </h1>  
                </TittleBox>
                {elementos.length > 0 ? 
                    elementos.map((elemento) => {
                        return(
                            <>
                                <Schedule key={elemento.id} weekday={elemento.weekday} date={elemento.date} showtimes={elemento.showtimes}/>
                            </>
                        );
                    })
                : <></>
                }
                    
            </section>
            <Footer>
                <ImgContainer>
                    <div>
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Capa do filme"/>
                    </div>
                </ImgContainer>
                <TextContainer>
                    <p>Liga da Justiça</p>
                </TextContainer>
            </Footer>
            
        </>
    );
}
function Schedule(props){
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
                                                <span className="scheduleBox">{showtime.name}</span>
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
const Footer = styled.footer`
    width: 100vw;
    height: 15vh;
    background-color: #DFE6ED;
    display:flex;
    position: fixed;
    bottom:0;
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