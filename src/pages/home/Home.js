import './Home.css';
import logo from "../../img/football.png";
import Navbar from '../../layout/navbar';


function Homepage(){
    return(
        <div className="container">
            <Navbar />
            <h1>
                P.<img src={logo} alt="bola" height="80" width="80"/>.D.E
            </h1> 
            <div className="row">
                <div class="card">
                    <h2>Ranking</h2>
                    <p>Aplicada</p>            
                </div> 
                <div class="card">
                    <h2>Ultimos Resultados</h2>
                    <p>Aplicada 1 x 0 Binaria</p>                     
                </div> 
            </div>
        
        </div>

                 
    );
}
export default Homepage;