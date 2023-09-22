import React from 'react';

const GameCard = ({ date, team1Logo, team2Logo, score }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={team1Logo} alt="Team 1" className="w-8 h-8 mr-2" />
          Team 1
        </div>
        <div>{score || 'Time TBD'}</div>
        <div className="flex items-center">
          Team 2
          <img src={team2Logo} alt="Team 2" className="w-8 h-8 ml-2" />
        </div>
      </div>
      <div className="text-gray-600 mt-2">{date}</div>
    </div>
  );
};

export default GameCard;
