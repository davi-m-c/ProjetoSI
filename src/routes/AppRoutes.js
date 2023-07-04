import{BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Homepage from "../pages/home/Home";
import Ranking from "../pages/ranking/Ranking";
import Marcar from "../pages/marcacao/MarcarAmistoso";
import Atleticas from "../pages/atleticas/Atleticas";



export function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/davi-m-c/ProjetoSI23-1.git" element={<Homepage/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/login" element={<Login/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/register" element={<Register/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/ranking" element={<Ranking/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/marcar" element={<Marcar/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/atleticas" element={<Atleticas/>}/>
        </Routes>
    </BrowserRouter>
    )
}