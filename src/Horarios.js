export default function Horarios(){
    return(
        <>
            <section className="schedulesSection">
                <h1 className="componentTittle"> Selecione o horário </h1>
                <Horario/>
                <Horario />
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