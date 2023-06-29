import './Login.css';
import { useState } from "react";
import logo from "../../img/football.png";
import {Link} from "react-router-dom";
import Pode from "../../layout/Pode";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {auth} from "../../services/firebaseConfig";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>;
    }
    if (user) {
        return console.log(user);
    }

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
                        onChange={(e) =>setEmail(e.target.value)}
                    />
                </div> 

                <div className="inputContainer">
                    <input
                        name="author"
                        id="author"
                        type="text"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <h2></h2>
                <input type="radio" id = "Atletica" name="OPCAO" value="op1" checked/>
                <label for="Atletica"> Atlética </label>
                <input type="radio" id = "Jogador" name="OPCAO" value="op1"/>
                <label for="Jogador"> Jogador</label>
                <h3></h3>
                <button onClick={handleSignIn}> Entrar </button>
                <h4></h4>
                <Link to="/davi-m-c/ProjetoSI23-1.git/register"> Registrar </Link>
            </form>
        </div> 
                 
    );
}
export default Login;