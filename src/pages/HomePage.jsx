import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import axios from 'axios';
import GameCard from '../components/GameCard';
// import teamsData from '../data/teams.json';
// import weekGameData from '../data/gameWeek.json';

const HomePage = () => {
  const [nextGame, setNextGame] = useState([]);
  const [lastGame, setLastGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api-agregateur.ffr.fr/graphql?saisonId=&variables=%7B%22structureIdentifiant%22%3A%22racing-club-salvetat-plaisance%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22a2439052b18db96fc753cdda15989d2666289c1e6796145ccb2d2fa9312fdb6c%22%7D%7D'
        );

        const nextGame = response.data.data.structure.Competitions[0].nextrencontre;

        const title = "Match suivant :";
        const dateTime = nextGame.date;
        const date = format(new Date(dateTime), 'dd MMMM', { locale: fr });
        const teamVisitor = nextGame.CompetitionEquipeVisiteuse.Structure.embleme;
        const teamLocal = nextGame.CompetitionEquipeLocale.Structure.embleme;
        const info1 = "15h15";
        const info2 = "13h30";

        const nextGameData =  { title, date, teamVisitor, teamLocal, info1, info2 };

        const lastGame = response.data.data.structure.Competitions[0].lastrencontre;
        const lastGame2 = response.data.data.structure.Competitions[1].lastrencontre;

        const lastTitle = "Match précédent :";
        const lastDateTime = lastGame.date;
        const lastDate = format(new Date(lastDateTime), 'dd MMMM', { locale: fr });
        const lastTeamVisitor = lastGame.CompetitionEquipeVisiteuse.Structure.embleme;
        const lastTeamLocal = lastGame.CompetitionEquipeLocale.Structure.embleme;
        const lastInfo1 = lastGame.RencontreResultatLocale.pointsDeMarque + " - " + lastGame.RencontreResultatVisiteuse.pointsDeMarque;
        const lastInfo2 = lastGame2.RencontreResultatLocale.pointsDeMarque + " - " + lastGame2.RencontreResultatVisiteuse.pointsDeMarque;

        const lastGameData =  { title: lastTitle, date: lastDate, teamVisitor: lastTeamVisitor, teamLocal: lastTeamLocal, info1: lastInfo1, info2: lastInfo2 };

        setNextGame(nextGameData);
        setLastGame(lastGameData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <GameCard gameData={ nextGame } />
      <GameCard gameData={ lastGame } />
    </div>
  );
};

export default HomePage;
