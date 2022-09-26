import "./index.css"

const Total = ({ listTransactions }) => {
    return (
        <div className="divTotal">
            <div className="divTextTotal">
                <p className="valorTotal">Valor:</p>
                <p className="valorDesc">O valor se refere ao saldo</p>
            </div>
            <p className="numeroTotal">
                R${" "}
                {listTransactions.length === 0
                ? 0
                : listTransactions.map((transition) => {

                if (transition.type === "Despesa") {
                    return transition.value * -1;
                } else {
                    return transition.value;
                }

                }).reduce((acc, valorAtual) => {
                const tot = Number(valorAtual) + acc
                return tot
                })}
            </p>
        </div>
    )
}

export default Total