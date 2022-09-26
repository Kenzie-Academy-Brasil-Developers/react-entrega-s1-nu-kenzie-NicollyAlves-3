import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import DashBoard from "../DashBoard/DashBoard"

const RotasNav = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/main" element={<DashBoard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RotasNav