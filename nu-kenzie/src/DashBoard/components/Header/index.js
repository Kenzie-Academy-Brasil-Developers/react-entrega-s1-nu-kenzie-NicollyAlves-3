import logo from "../../../assets/Nu Kenzie2.svg"
import { useNavigate } from "react-router-dom";
import ".//index.css"

const Header = () => {
    let navigate = useNavigate();

    const btnInicio = () => {
        navigate(`/`);
    };

    return (
        <nav className="navHeader">
                <img className="imgLogoHeader" src={logo} alt="logo nu-kenzie"/>
                <button className="btnInicio" onClick={btnInicio}>Início</button>
        </nav>
    )
}
export default Header