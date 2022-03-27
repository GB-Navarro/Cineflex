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
                <Link to="/seats"><Schedule/></Link>
                <Link to="/seats"><Schedule /></Link>
                {
                    elementos.map((elemento) => {
                        <Link to="/seats">
                            <Schedule weekday={elemento.weekday} date={elemento.date} showtime1={elemento.showtimes[0].name} showtime2={elemento.showtimes[1].name}/>
                        </Link>
                    })
                }
            </section>
            <footer className="footerSchedules">
                <div>
                    <img src="https://static1.purebreak.com.br/articles/6/36/06/6/@/175932-filme-esquadrao-suicida-coringa-jare-950x0-2.jpg" alt="Capa do filme"/>
                </div>
                <div className="footerSchedulesBox">
                    <p>Esquadrão Suicida</p>
                </div>
            </footer>
            
        </>
    );
}
function Schedule(props){
    return (
        <div>
            <div className="scheduleInfo">
                <p>{props.weekday} - {props.date}</p>
                <span className="scheduleBox">{props.showtime1}</span>
                <span className="scheduleBox">{props.showtime2}</span>
            </div>
        </div>
    );
}
