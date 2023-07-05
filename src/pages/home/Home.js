import './Home.css';
import Navbar from '../../layout/navbar';
import {Link} from "react-router-dom";
import Pode from '../../layout/Pode';
import React from 'react';

 function Homepage(){  
    return(
        <div className="container">
            <Navbar />
            <h1>
                <Pode/>
            </h1> 
            
            <h2>
            <Link to="/davi-m-c/ProjetoSI23-1.git/register"> Cadastro </Link>
            <h3><Link to="/davi-m-c/ProjetoSI23-1.git/login"> Login </Link></h3>
            
            </h2>
            <div className="row">
                <div class="card">
                    <h3>Top 3</h3>
                    <p> 
                        Posição	Nome	Pontos
                    </p>
                    <p> 
                        1	Aplicada	120
                    </p>
                    <p> 
                        2	Binaria	110
                    </p>
                    <p> 
                        3	Olimpia	100 
                    </p>    
                </div> 
                <div class="card">
                    <h4>Ultimos Resultados</h4>
                    <p>
                        Aplicada 2 x 1 Binaria
                        Aplicada 4 x 1 Milionária
                        Binaria 2 x 0 Olímpia
                        Olímpia 2 x 2 Milionária
                    </p>                     
                </div> 
            </div>
        
        </div>

                 
    );
}
export default Homepage;