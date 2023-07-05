import './Login.css';
import { useState } from "react";
import Navbar from '../../layout/navbar';
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
            <Navbar/>
            <header className="header">
                <Pode />
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
                <button onClick={handleSignIn}> Entrar </button>
                <h3></h3>
                <Link to="/davi-m-c/ProjetoSI23-1.git/register"> Registrar </Link>
            </form>
        </div> 
                 
    );
}
export default Login;