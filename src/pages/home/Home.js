import './Home.css';
import logo from "../../img/football.png";
import Navbar from '../../layout/navbar';
import {Link} from "react-router-dom";
import Pode from '../../layout/Pode';


function Homepage(){
    return(
        <div className="container">
            <Navbar />
            <h1>
                <Pode/>
            </h1> 
            <h2>
            <Link to="/davi-m-c/ProjetoSI23-1.git/login"> Login </Link>
            </h2>
            <div className="row">
                <div class="card">
                    <h3>Ranking</h3>
                    <p>Aplicada</p>            
                </div> 
                <div class="card">
                    <h3>Ultimos Resultados</h3>
                    <p>Aplicada 1 x 0 Binaria</p>                     
                </div> 
            </div>
        
        </div>

                 
    );
}
export default Homepage;