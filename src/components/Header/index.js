import styled from "styled-components";

export default function Header(props) {
    return (
        <>
            <HeaderContainer>
                {props.children}
                <h1> CINEFLEX </h1>
            </HeaderContainer>

        </>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 9vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-size:34px;
    
    div{
        position: absolute;
        left: 2vw;
        display:flex;
    }
`