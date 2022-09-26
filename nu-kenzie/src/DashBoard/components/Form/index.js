import { useState } from "react";
import "./index.css"

const Form = ({listTransactions, setListTransactions}) => {
    const [inputDesc, setInputDesc]   = useState("")
    const [inputValor, setInputValor] = useState("")
    const [optionTipo, setOptionTipo] = useState("Entrada")

    const limpar = () => {
        setInputDesc("")
        setInputValor("")
        setOptionTipo("entrada")
    }

    const transicao = (event) => {
        event.preventDefault()

        let transicao = {
            description: inputDesc,
            value: parseFloat(inputValor),
            type: optionTipo
        }
        console.log(transicao);
        setListTransactions([...listTransactions, transicao])
        limpar()
    }
    return (
        <form className="containerForm" onSubmit={transicao}>
            <div className="divDescricao">
                <label>Descrição</label>
                <input onChange={(event) => setInputDesc(event.target.value)} type="text" placeholder="Digite aqui sua descrição" value={inputDesc}/>
                <p>Ex: compra de roupas</p>
            </div>
            <div className="divConteudo">
                <div className="divValor">
                    <label>Valor</label>
                    <input onChange={(event) => setInputValor(event.target.value)} type="number" placeholder="R$" value={inputValor}/>
                </div>

                <div className="divTipoValor">
                    <label>Tipo de valor</label>
                    <select className="selectTipoValor" onChange={(event) => setOptionTipo(event.target.value)}>
                        <option className="optionEntrada" value="Entrada" >Entrada</option>
                        <option className="optionDespesa" value="Despesa" >Despesa</option>
                    </select>
                </div>
            </div>

            <button className="btnInserirValor" type="submit">Inserir valor</button>
        </form>
    )
}

export default Form