import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";


export default function Schedules(){
    
    const {scheduleId} = useParams();
    const [elementos, setElementos] = useState([])

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${scheduleId}/showtimes`);
        promisse.then((response) => {
            const {data} = response;
            setElementos(data.days);
            console.log("Aqui são os dados dos elementos", elementos);
            console.log("Aqui são os dados da data", data);
            
        })
    },[])

    return(
        <>
            <section className="schedulesSection">
                <h1 className="componentTittle"> Selecione o horário </h1>
                <Schedule/>
                <Schedule />
                {elementos.length > 0 &&
                    elementos.map((elemento) => {
                        <Link to="/seats">
                            <Schedule weekday={elemento.weekday} date={elemento.date} showtime1={elemento.showtimes[0].name} showtime2={elemento.showtimes[1].name}/>
                        </Link>
                    })
                }
                    
            </section>
            <footer className="footerSchedules">
                <div className="footerSchedulesContainer">
                    <div className="footerSchedulesImg">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="Capa do filme"/>
                    </div>
                </div>
                <div className="footerSchedulesBox">
                    <p>Liga da Justiça</p>
                </div>
            </footer>
            
        </>
    );
}
function Schedule(props){
    return (
        <>
        <div>
            <div className="scheduleInfo">
                <p>{props.weekday} - {props.date}</p>
                <span className="scheduleBox">{props.showtime1}</span>
                <span className="scheduleBox">{props.showtime2}</span>
            </div>
        </div>
        {/*<div>
            <div className="scheduleInfo">
                <p>Quarta-feira - 25/08/2020</p>
                <div className="schedulesContainer">
                    <div className="scheduleBox">
                        <Link to="/seats">
                            <p>15:00</p>
                        </Link>
                    </div>
                    <div className="scheduleBox">
                        <Link to="/seats">
                            <p>16:00</p>
                        </Link>
                    </div>
                </div>
    </div>
        </div>*/}
        </>
    );
}
