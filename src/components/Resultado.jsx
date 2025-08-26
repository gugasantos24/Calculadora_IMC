import Tabela from "./TabelaImc";
import "../css/global.css"
import "../css/resultado.css"

// Destruct ou desustruturação "<> <\>" - acessa propriedades de outros componentes
function Resultado({resultado}) {
    return (
        <>
            <div>
                <div className="resultado">
                    <h2>
                        Seu IMC é de : <span className="imcSpan">{resultado}</span>
                    </h2>
                </div>
                    <table className="tabela">
                        <thead className="tableHeader">
                            <tr>
                                <th>Classificação</th>
                                <th>IMC</th>
                            </tr>
                        </thead>
                        <tbody className="tableBody">
                            {/* Chamando a funcção criada  */}
                            <tr>{Tabela(resultado)}</tr> 
                        </tbody>
                    </table>    


            </div>
        </>
    )
}

export default Resultado