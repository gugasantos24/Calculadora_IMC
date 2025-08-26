import Header from "./components/Header"
import Resultado from "./components/Resultado"
import { useEffect, useState } from "react"

function App() {

  // HOOK - useState = manipula o estado a variável
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false)

  // CRIANDO FUNÇÃO DE CALCULAR IMC
  const calcularImc=()=> {
    const imc = peso / (altura * peso)
    return setResultado(imc.toFixed(2))
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
