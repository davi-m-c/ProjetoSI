import React, { useState } from "react";

const GameForm = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [games, setGames] = useState([]);

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };

  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Salvar o jogo na lista de jogos
    const newGame = {
      name1,
      name2,
      dateTime,
    };
    setGames([...games, newGame]);

    // Limpar os campos do formulário
    setName1("");
    setName2("");
    setDateTime("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        Atletica 1:
          <input type="text" value={name1} onChange={handleName1Change} />
        </label>
        <br />
        <label>
        Atletica 2:
          <input type="text" value={name2} onChange={handleName2Change} />
        </label>
        <br />
        <label>
          Data e Hora:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={handleDateTimeChange}
          />
        </label>
        <br />
        <button type="submit">Marcar Jogo</button>
      </form>

      {games.length > 0 && (
        <div>
          <h3>Jogos Marcados:</h3>
          {games.map((game, index) => (
            <div key={index}>
              <p>Atletica 1: {game.name1}</p>
              <p>Atletica 2: {game.name2}</p>
              <p>Data e Hora: {game.dateTime}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameForm;