import React from 'react';

const LastGameCard = ({ date, team1Logo, team2Logo, score1, score2 }) => {
  return (
    <div>
      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={team1Logo} alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{date}</div>
            <div className="text-2xl text-center font-bold">
              {score2 !== null ? score2 : '13h30'}
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 2</div>
          </div>

          <div className="">
            <img src={team2Logo} alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={team1Logo} alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{date}</div>
            <div className="text-2xl text-center font-bold">
              {score1 !== null ? score1 : '15h15'}
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 1</div>
          </div>

          <div className="">
            <img src={team2Logo} alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastGameCard;