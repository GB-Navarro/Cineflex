import styled from "styled-components";

export default function Movie(props) {
    return (
        <>
            <MovieImage>
                <img src={props.imgSrc} alt={props.imgAlt} />
            </MovieImage>
        </>
    )
}

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