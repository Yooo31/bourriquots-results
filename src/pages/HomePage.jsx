import React from 'react';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const gameData = [
    {
      date: '24 septembre 2023',
      team1Logo: ' https://api-agregateur-static.ffr.fr/assets/embleme/club/642.jpg',
      team2Logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/3169.jpg',
      score: '13h30',
      team: 'Équipe 2'
    },
    {
      date: '24 septembre 2023',
      team1Logo: ' https://api-agregateur-static.ffr.fr/assets/embleme/club/642.jpg',
      team2Logo: 'https://api-agregateur-static.ffr.fr/assets/embleme/club/3169.jpg',
      score: '15h15',
      team: 'Équipe 1'
    },
  ];

  return (
    <div>
      {gameData.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
};

export default HomePage;
