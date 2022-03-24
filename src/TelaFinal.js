export default function TelaFinal(){
    return(
        <>
            <section className="finalScreen">
                <h1 className="confirmationMessage"> Pedido feito com sucesso! </h1>
                <div className="confirmationInfos">
                    <div className="movieAndSection">
                        <h1>Filme e Sessão</h1>
                        <p>Enola Holmes</p>
                        <p>24/06/2021 15:00</p>
                    </div>
                    <div className="tickets">
                        <h1>Ingressos</h1>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </div>
                    <div className="buyer">
                        <h1>Comprador</h1>
                        <p>Nome: Gabriel da Silva Navarro</p>
                        <p>CPF: 982.293.000-00</p>
                    </div>
                </div>
                <div className="box">
                    <div className="backToHome">
                        <p> Voltar pra Home </p>
                    </div>
                </div>
            </section>
            
        </>
    );
}