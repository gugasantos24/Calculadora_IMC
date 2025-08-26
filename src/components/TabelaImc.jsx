const Tabela = (resultado) => {
    if (resultado < 18.5){
        return (
            <>
                <td>Abaixo do Peso</td>
                <td>Abaixo de 18,5</td>
            </>
        )
    } else if (resultado > 18.5 && resultado < 25) {
        return (
            <>
            <td>Peso Normal</td>
            <td>18.5 - 24.9</td>
            </>
        )
    } else if (resultado > 25 && resultado < 30) {
        return (
            <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        )
    } else if (resultado > 29 && resultado < 35) {
        return (
            <>
            <td>Obesidade Grau I</td>
            <td>30 - 34.9</td>
            </>
        )
    } else {
        return (
            <>
            <td>Obesidade Mórbida</td>
            <td>Maior ou igual a 40</td>
            </>
        )
    }
}

export default Tabela