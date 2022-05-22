import styled from "styled-components";

import removeElement from "./removeElement";
import verifyArray from "./verifyArray";

export default function Chair(props) {
    return (
        <>
            <Seat className={props.isAvailable === true ? (verifyArray(props.selectedSeats, props.id) ? "selected" : "available") : "unavailable"} onClick={() => {
                if (props.isAvailable === true) {
                    if (verifyArray(props.selectedSeats, props.id) === false) {
                        props.setSelectedSeats([...props.selectedSeats, props.id]);
                    } else {
                        removeElement(props.selectedSeats, props.id, props.setSelectedSeats);
                    }
                    if (verifyArray(props.selectedSeatsId, props.name) === false) {
                        props.setSelectedSeatsId([...props.selectedSeatsId, props.name]);
                    } else {
                        props.setSelectedSeatsId(
                            props.selectedSeatsId.filter((e) => e !== props.name)
                        );
                    }
                } else {
                    alert("Esse assento não está disponível");
                }

            }}>
                <p>{props.name}</p>
            </Seat>
        </>
    )
}

const Seat = styled.div`
    width: 26px;
    height: 26px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-bottom:18px;
    margin-left:8px;
`