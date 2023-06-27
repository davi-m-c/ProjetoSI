import './Login.css';
import logo from "../../img/football.png";
import {Link} from "react-router-dom";
import Pode from "../../layout/Pode";
function Login(){
    return(
        <div className="container">
            <header className="header">
                <Pode/>
            </header> 
            <form>
                <div className="inputContainer">
                    <input 
                        name="author" 
                        id="author"
                        type="text" 
                        placeholder="Email"
                    />
                </div> 

                <div className="inputContainer">
                    <input
                        name="author"
                        id="author"
                        type="text"
                        placeholder="Senha" 
                    />
                </div>
                <h2></h2>
                <input type="radio" id = "Atletica" name="OPCAO" value="op1" checked/>
                <label for="Atletica"> Atlética </label>
                <input type="radio" id = "Jogador" name="OPCAO" value="op1"/>
                <label for="Jogador"> Jogador</label>
                <h3></h3>
                <button > Entrar </button>
                <h4></h4>
                <Link to="../register/Register.js"> Registrar </Link>
            </form>
        </div> 
                 
    );
}
export default Login;