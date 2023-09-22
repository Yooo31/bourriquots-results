import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import teamsData from '../data/teams.json';
import weekGameData from '../data/gameWeek.json';

const HomePage = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const weekGame = weekGameData.weekGame;

    const gamesWithInfo = weekGame.map((game) => {
      const team1Info = teamsData.teams.find((team) => team.id === game.team1);
      const team2Info = teamsData.teams.find((team) => team.id === game.team2);

      return {
        date: game.date,
        team1Logo: team1Info ? team1Info.img : '',
        team2Logo: team2Info ? team2Info.img : '',
        score1: game.score1,
        score2: game.score2,
      };
    });

    setGameData(gamesWithInfo);
  }, []);

  return (
    <div>
      {gameData.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </div>
  );
};

export default HomePage;
