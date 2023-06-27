import{BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Homepage from "../pages/home/Home";



export function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    )
}