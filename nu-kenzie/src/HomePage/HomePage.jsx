import { useNavigate } from "react-router-dom";
import imagemDashBoard from "../assets/Group 262.svg"
import Logo from "../assets/Nu Kenzie.svg";
import './index.css'

function HomePage() {
let navigate = useNavigate();

const btnIniciar = () => {
    navigate(`/main`)
}

    return (
    <main className="mainHome">
        <section className="containerInfos">
            <img className="logoHome" src={Logo} alt="Nu Kenzie Logo"></img>
            <h1 className="tituloHome">Centralize o controle das suas finanças</h1>
            <p className="sloganHome">de forma rápida e segura</p>
                <button className="btnIniciar" onClick={btnIniciar}>Iniciar</button>
        </section>

        <section className="containerCard">
            <img src={imagemDashBoard} alt="Imagem card de Finanças"></img>
        </section>
    </main>
    )
}

export default HomePage;