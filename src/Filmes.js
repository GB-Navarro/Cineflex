export default function Filmes(){
    return(
        <>
            <main >
                <h1 className="componentTittle"> Selecione o filme </h1>
                <div className="filmes">
                    <Filme imgSrc="https://static1.purebreak.com.br/articles/6/36/06/6/@/175932-filme-esquadrao-suicida-coringa-jare-950x0-2.jpg" imgAlt="Imagem do filme"/>
                    <Filme imgSrc="https://static1.purebreak.com.br/articles/6/36/06/6/@/175932-filme-esquadrao-suicida-coringa-jare-950x0-2.jpg" imgAlt="Imagem do filme"/>
                    <Filme imgSrc="https://static1.purebreak.com.br/articles/6/36/06/6/@/175932-filme-esquadrao-suicida-coringa-jare-950x0-2.jpg" imgAlt="Imagem do filme"/>
                    <Filme imgSrc="https://static1.purebreak.com.br/articles/6/36/06/6/@/175932-filme-esquadrao-suicida-coringa-jare-950x0-2.jpg" imgAlt="Imagem do filme"/>
                </div>
            </main>
        </>
    )
}
function Filme(props){
    return (
        <>
            <div className="filmeImg">
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </div>
        </>  
    )
}