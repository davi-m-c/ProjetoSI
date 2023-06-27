import{BrowserRouter, Route, Routes} from "react-router-dom";
import{Login} from "../pages/home/Home";
import{Register} from "../pages/register/Register";



export function AppRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
    )
}