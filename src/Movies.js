import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Movies(){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    let movies = []
    const [elements,setElements] = useState([]);

    useEffect(() => {
        promisse.then((response) => {
            movies = response.data;
            setElements(movies);
        })
        promisse.catch(() => {
            console.log("Erro na requisição")
        })
    },[]);
    
    return(
        <>
            <main >
                <h1 className="componentTittle"> Selecione o filme </h1>
                <div className="movies">
                    {elements.map(element => {
                        return (
                            <Link to={`schedules/${element.id}`}>
                                <Movie imgSrc={element.posterURL} imgAlt={element.title}/>
                            </Link>
                            
                        )
                    })} 
                </div>
            </main>
        </>
    )
}
function Movie(props){
    return (
        <>
            <div className="movieImg">
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </div>
        </>  
    )
}