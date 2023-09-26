import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RankingTable from '../components/RankingTable';

const RankingPage = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api-agregateur.ffr.fr/graphql?saisonId=&variables=%7B%22structureIdentifiant%22%3A%22racing-club-salvetat-plaisance%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22a2439052b18db96fc753cdda15989d2666289c1e6796145ccb2d2fa9312fdb6c%22%7D%7D'
        );

        const team1 = response.data.data.structure.Competitions[0].CurrentPhase.poules[8].ClassementIntraPoule.structures;
        team1.sort((a, b) => a.poule_rang - b.poule_rang);

        const team1RankingData = team1.map((structure) => {
          const id = structure.Equipe.Structure.id;
          const points = structure.score.pointTerrain;
          const name = structure.Equipe.Structure.nom;
          return { id, points, name };
        });

        setTeam1(team1RankingData);

        const team2 = response.data.data.structure.Competitions[1].CurrentPhase.poules[8].ClassementIntraPoule.structures;
        team2.sort((a, b) => a.poule_rang - b.poule_rang);

        const team2RankingData = team2.map((structure) => {
          const id = structure.Equipe.Structure.id;
          const points = structure.score.pointTerrain;
          const name = structure.Equipe.Structure.nom;
          return { id, points, name };
        });

        setTeam2(team2RankingData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <RankingTable team1={team1} team2={team2} />
    </div>
  );
};

export default RankingPage;
