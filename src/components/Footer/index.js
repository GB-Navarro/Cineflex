import styled from "styled-components";

export default function Footer(props) {
    return (
        <>
            <FooterContainer>
                {props.children}
            </FooterContainer>

        </>
    )
}

const FooterContainer = styled.footer`
    width: 100vw;
    height: 15vh;
    background-color: #DFE6ED;
    display:flex;
    position: fixed;
    bottom:0;
`