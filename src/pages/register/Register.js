import './Register.css';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import logo from "../../img/football.png";
import { auth } from "../../services/firebaseConfig";
import Pode from '../../layout/Pode';

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
                <Pode />
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
                <body></body>
                <button onClick={handleSignOut} > Registrar </button>
            </form>
        </div> 
                 
    );
}
export default Register;