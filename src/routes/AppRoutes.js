import{BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Homepage from "../pages/home/Home";



export function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/davi-m-c/ProjetoSI23-1.git" element={<Homepage/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/login" element={<Login/>}/>
            <Route path="/davi-m-c/ProjetoSI23-1.git/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    )
}