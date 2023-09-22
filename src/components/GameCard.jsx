import React from 'react';

const GameCard = ({ date, team1Logo, team2Logo, score, team }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <div className="flex justify-evenly">
        <div className="">
          <img src={team1Logo} alt="Team 1" className="mr-2" />
        </div>

        <div className="flex-col items-center">
          <div className="text-gray-600 text-center text-xs">{date}</div>
          <div className="text-2xl text-center font-bold">{score || 'Time TBD'}</div>
          <div className="text-gray-600 text-center text-xs">{team}</div>
        </div>

        <div className="">
          <img src={team2Logo} alt="Team 2" className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
