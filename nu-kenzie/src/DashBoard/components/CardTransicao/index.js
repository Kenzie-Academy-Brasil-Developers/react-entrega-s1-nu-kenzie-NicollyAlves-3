import lixeira from "../../../assets/ButtonTrash.svg"
import "./index.css"

const Card = ({transicao, deletar}) => {
    return (
        <div className={transicao.type === "Entrada" ? "verdeCard" : "vermelhaCard"}>
            <div className="containerCards">
                <div className="descricao">
                    <p className="desc">{transicao.description}</p>
                    <p className="tipo">{transicao.type}</p>
                </div>

                <div className="valor">
                    <p className="valorTransicao">R$ {transicao.value}</p>
                    <button className="deletar" onClick={() => {deletar(transicao)}}>
                        <img className="imgLixeira" src={lixeira} alt="lixeira"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card