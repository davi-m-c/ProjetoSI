import './Register.css';
import logo from "../../img/football.png";

function Register(){
    return(
        <div className="container">
            <h1>P.<img src={logo} alt="bola" height="80" width="80"/>.D.E</h1>   
            <input name="author" id="author" type="text" placeholder="Email"/>
            <h2></h2>   
            <input name="author" id="author" type="text" placeholder="Senha" />
            <h3></h3>
            <input type="radio" id = "Atletica" name="OPCAO" value="op1" checked/>
            <label for="Atletica"> Atlética </label>
            <input type="radio" id = "Jogador" name="OPCAO" value="op1"/>
            <label for="Jogador"> Jogador</label>
            <h4></h4>
            <button > Registrar </button>
        </div> 
                 
    );
}
export default Register;