import Navbar from '../../layout/navbar';
import React from 'react';
import "./Ranking.css";

const RankingPage = () => {
  const rankingData = [
    { id: 1, name: 'Olimpia', points: 100 },
    { id: 2, name: 'Milionaria', points: 80 },
    { id: 3, name: 'Aplicada', points: 120 },
    { id: 4, name: 'Binaria', points: 110 },
  ];
  
  const sortedRanking = rankingData.sort((a, b) => b.points - a.points);

  return (
    <div className="container">
        <Navbar/>
      <h1>Ranking por Pontos</h1>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {sortedRanking.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingPage;