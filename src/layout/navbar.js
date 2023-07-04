import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="container">
            <nav>
                <Link to="/davi-m-c/ProjetoSI23-1.git"> <button>Home</button> </Link>
                <Link to="/davi-m-c/ProjetoSI23-1.git/ranking"> <button>Ranking</button> </Link>
                <Link to="/davi-m-c/ProjetoSI23-1.git/register"> <button>Cadastro</button> </Link>
                <Link to="/davi-m-c/ProjetoSI23-1.git/atleticas"> <button>Atleticas</button> </Link>
            </nav>
        </div>
        
        )
}

export default Navbar