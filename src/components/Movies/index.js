import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import Header from "../Header";

export default function Movies() {
    const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    const [elements, setElements] = useState([]);

    useEffect(() => {
        promisse.then((response) => {
            setElements(response.data);
        })
        promisse.catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <Header></Header>
            <Main>
                <h1> Selecione o filme </h1>
                <MoviesContainer>
                    {elements.map(element => {
                        return (
                            <Link to={`schedules/${element.id}`}>
                                <Movie key={element.id} imgSrc={element.posterURL} imgAlt={element.title} />
                            </Link>

                        )
                    })}
                </MoviesContainer>
            </Main>
        </>
    )
}
function Movie(props) {
    return (
        <>
            <MovieImage>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </MovieImage>
        </>
    )
}

const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

    h1{
        margin: 50px 0px 50px 0px;
        color: #293845;
        font-size: 24px;
    }
`

const MoviesContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const MovieImage = styled.div`
    width: 129px;
    height: 193px;
    margin-bottom:27px;
    background-color: #FFFFFF;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;

    img{
        max-width: 90%;
        max-height: 90%;
    }
`