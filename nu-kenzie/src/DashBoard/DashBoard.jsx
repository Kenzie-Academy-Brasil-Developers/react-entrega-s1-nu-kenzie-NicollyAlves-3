import './index.css';
import { useState } from "react"
import Header from './components/Header/index';
import Form from './components/Form/index';
import ContainerLista from './components/ContainerLista/index';
import Total from './components/CardTotal';
import "./index.css"
import "../DashBoard/components/Header/index.css"
function DashBoard() {

const [listTransactions, setListTransactions] = useState([])
return (
    <div className="DashBoard">
        <Header/>
    <div className='DashBoardPrinc'>
    <div>
        
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
        <Total listTransactions={listTransactions} />
    </div>

    <div>

        <ContainerLista listTransactions={listTransactions} setListTransactions={setListTransactions}/>

    </div>

    </div>

    </div>
);
}

export default DashBoard;
