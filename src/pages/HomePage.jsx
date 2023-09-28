import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
// import teamsData from '../data/teams.json';
// import weekGameData from '../data/gameWeek.json';

const HomePage = () => {
  const [nextGame, setNextGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api-agregateur.ffr.fr/graphql?saisonId=&variables=%7B%22structureIdentifiant%22%3A%22racing-club-salvetat-plaisance%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22a2439052b18db96fc753cdda15989d2666289c1e6796145ccb2d2fa9312fdb6c%22%7D%7D'
        );

        const nextGame = response.data.data.structure.Competitions[0].nextrencontre;

        const date = nextGame.date
        const teamVisitor = nextGame.CompetitionEquipeVisiteuse.Structure.embleme
        const teamLocal = nextGame.CompetitionEquipeLocale.Structure.embleme
        const info1 = "13h30"
        const info2 = "15h15"
        const nextGameData =  { date, teamVisitor, teamLocal, info1, info2 };


        setNextGame(nextGameData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <GameCard nextGameData={nextGame} />
  );
};

export default HomePage;
