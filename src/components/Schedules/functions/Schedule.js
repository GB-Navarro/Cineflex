import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Schedule(props) {
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