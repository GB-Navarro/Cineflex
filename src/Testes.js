import axios from "axios";
import {useState} from "react";
export default function Testes(){
    const [elementos, setElementos] = useState([]);
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/shuttercamp/images");
    promisse.then((response) => {
        setElementos(response.data);
    })
    promisse.catch(() => {
        console.log("Deu erro!");
    })
    return (
        <>  
            {
                elementos.map(elemento => {
                    <div className="testes" key={elemento.id}>
                        <img src={elemento.url} alt={elemento.tittle}/>
                        <p>{elemento.tittle}</p>
                    </div>
                })
            }
        </>
    );
}
