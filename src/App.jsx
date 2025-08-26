import Header from "./components/Header"
import Resultado from "./components/Resultado"
import { useEffect, useState } from "react"
import "./css/global.css"
import "./css/estilo.css"

function App() {

  // HOOK - useState = manipula o estado a variável
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false)

  //CRIANDO A FUNÇÃO CALCULAR IMC
  const calcularImc=(e)=>{
    e.preventDefault(); //evita o carregamento da página(loading)
    if(altura >0 && peso >0){
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2))//arrendoda para 2 casas decimais
      setMostrarResultado(true);
    }else{
      alert("Por favor insira valores Válidos");
      setMostrarResultado(false)
    }
  }

  // HOOK - useEffect - realiza  um efeito colateral - mostrar resultado
  // Condicional ternário  ? = if      : = else
  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false)
    },[resultado])     

  return (
    <div className="container">
      <div className="box">
        <Header/>
        <form>
          <label htmlFor="Altura">Altura <span>{}exemplo:1.8</span></label>
          <input type="number" id="altura" placeholder="Digite sua Altura" 
          onBlur={({target})=>parseInt(setAltura(target.value))}> 
          </input>

          <div>
        <label htmlFor="peso">Peso<span>(exemplo:80)</span></label>
        <input id="peso" type="number" placeholder="Digite seu Peso" 
        onBlur={({target})=>parseInt(setPeso(target.value))} />
        </div>
        <button onClick={calcularImc}>Calcular</button> 
        </form>
      </div>
        {mostrarResultado &&(
          <Resultado resultado = {resultado}/>
        )}
    </div>
  )
}

export default App
