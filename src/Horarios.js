import {Link} from "react-router-dom";
export default function Horarios(){
    return(
        <>
            <section className="schedulesSection">
                <h1 className="componentTittle"> Selecione o horário </h1>
                <Link to="/assentos"><Horario /></Link> {/*O Link ficou com formatação, como remover
                sem remover os estilos já colocados anteriormente ao Link ? */}
                <Link to="/assentos"><Horario /></Link>
            </section>
        </>
    );
}
function Horario(props){
    return (
        <div>
            <div className="scheduleInfo">
                <p>Quinta Feira - 24/06/2021</p>
                <span className="scheduleBox">15:00</span>
                <span className="scheduleBox">19:00</span>
            </div>
        </div>
    );
}