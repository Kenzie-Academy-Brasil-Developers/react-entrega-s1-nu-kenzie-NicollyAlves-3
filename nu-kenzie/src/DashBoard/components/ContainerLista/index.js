import { useState } from "react"
import listaVazia from "../../../assets/NoCard.svg"
import Card from "../CardTransicao"
import "./index.css"

const ContainerLista = ({listTransactions, setListTransactions}) => {
    const [filtrado, setFiltrado] = useState(false)
    const [arrayFiltro, setArrayFiltro] = useState([...listTransactions])

    const vazio = () => {
        return (
            <div className="divListaVazia">
                <h2>Você ainda não possui nenhum lançamento</h2>
                <img src={listaVazia} alt="Lista vazia"/>
            </div>
        )
    } 

    const deletar = (recebida) => {
        setListTransactions(
            listTransactions.filter((transicao) => transicao !== recebida)
        )
    }

    const filtros = (btnFiltro) => {
        btnFiltro !== "todos" ? setFiltrado(true) : setFiltrado(false)
    
        setArrayFiltro(
            listTransactions.filter((transicao) => transicao.type === btnFiltro)
        )
    }

    return (
        <section className="sectionFiltros">
            <div className="divFiltros">
                <h2 className="resumo">Resumo financeiro</h2>
                <div className="btns">
                    <button autoFocus className="todos" onClick={() => filtros("todos")}>Todos</button>
                    <button className="entrada" onClick={() => filtros("Entrada")}>Entradas</button>
                    <button className="despesa" onClick={() => filtros("Despesa")}>Despesas</button>
                </div>
            </div>
            {listTransactions.length == 0  ? vazio() : filtrado === false
                                ? listTransactions.map((transicao, index) => (
                                    <Card deletar={deletar} transicao={transicao} key={index} />
                                ))
                                : arrayFiltro.map((transicao, index) => (
                                    <Card deletar={deletar} transicao={transicao} key={index}/>
                                ))
            }
        </section>
    )
}
export default ContainerLista



