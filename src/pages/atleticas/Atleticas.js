import React, { useState } from 'react';
import Navbar from "../../layout/navbar";
import milionaria from "../../img/milionaria.jpg";
import aplicada from "../../img/aplicada.jpg";
import olimpia from "../../img/olimpia.jpg";
import binaria from "../../img/binaria.jpg";
import "./Atleticas.css"

const Card = ({ title, image, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`card ${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <p>{title}</p>
        <img
          src={image}
          alt={title}
          height="80"
          width="80"
        />
        {isOpen && <div className="card-content">{content}</div>}
      </div>
    );
  };
  
  const Atleticas = () => {
    return (
      <div className="contain">
        <Navbar />
        <h1></h1>
        <div className="row1">
          <Card
            title="Aplicada"
            image={aplicada}
            content="Cursos:CIC Φ | EST Σ | MAT π"
          />
          <Card
            title="Milionária"
            image={milionaria}
            content="Curso: Economia"
          />
        </div>
        <div className="row2">
          <Card
            title="Olímpia"
            image={olimpia}
            content="Curso:Direito"
          />
          <Card
            title="Binaria"
            image={binaria}
            content="Curso:Engenharia de Computação"
          />
        </div>
      </div>
    );
  }
  
  export default Atleticas;