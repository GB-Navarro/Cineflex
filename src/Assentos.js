export default function Assentos(){
    return (
        <>
            <section>
                <h1 className="componentTittle"> Selecione o(s) assento(s) </h1>
                <div className="assentos">
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                    <Assento />
                </div>
                <div className="description">
                    <div>
                        <div className="selected"></div>
                        <p>Selecionado</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <div className="available"></div>
                        <p>Disponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                    <div>
                        <div className="unavailable"></div>
                        <p>Indisponível</p>
                        {/*Preciso centralizar em relação a bolinha*/}
                    </div>
                </div>
                <div className="buyer">
                    <div className="buyerName">
                        <p>Nome do comprador:</p>
                        {/*Quando eu coloco input a tela some */}
                    </div>
                    <div className="buyerCPF">
                        <p>CPF do comprador:</p>
                        {/*Quando eu coloco input a tela some */}
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
        </>
    )
}
function Assento(){
    return (
        <>
            <div className="assento">
                <p>01</p>
            </div>
        </>
    )
}