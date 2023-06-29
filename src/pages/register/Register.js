import './Register.css';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import logo from "../../img/football.png";
import { auth } from "../../services/firebaseConfig";

function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    function handleSignOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando...</p>;
    }

    return(
        <div className="container">
            <header className="header">
                P.<img src={logo} alt="bola" height="80" width="80"/>.D.E
            </header> 
            <form>
                <div className="inputContainer">
                    <input
                        name="author"
                        id="author"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
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
                <h1></h1>
                <input type="radio" id = "Atletica" name="OPCAO" value="op1" checked/>
                <label for="Atletica"> Atlética </label>
                <input type="radio" id = "Jogador" name="OPCAO" value="op1"/>
                <label for="Jogador"> Jogador</label>
                <h2></h2>
                <button onClick={handleSignOut} > Registrar </button>
            </form>
        </div> 
                 
    );
}
export default Register;