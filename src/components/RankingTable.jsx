import React from 'react';

const RankingTable = ({ team1, team2 }) => {
  return (
    <div>
      <h2>Classement</h2>
      <ul>
        {team1.map((data1, index) => (
          <li key={index}>
            ID : {data1.id}, Nom : {data1.name}, Points : {data1.points}
          </li>
        ))}
      </ul>
      <ul>
        {team2.map((data2, index) => (
          <li key={index}>
            ID : {data2.id}, Nom : {data2.name}, Points : {data2.points}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingTable;
