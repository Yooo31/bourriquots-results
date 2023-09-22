import React from 'react';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const gameData = [
    {
      date: '2023-09-25',
      team1Logo: ' https://api-agregateur-static.ffr.fr/assets/embleme/club/642.jpg',
      team2Logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/1402.jpg',
      score: '2-1',
    },
    {
      date: '2023-09-26',
      team1Logo: ' https://api-agregateur-static.ffr.fr/assets/embleme/club/642.jpg',
      team2Logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/1402.jpg',
      score: '0-0',
    },
    // Ajoutez plus de données de matchs ici
  ];

  console.log('gameData:', gameData);

  return (
    <div>
      <h1>Accueil</h1>
      {gameData.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
};

export default HomePage;
