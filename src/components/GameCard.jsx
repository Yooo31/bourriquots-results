import React from 'react';

const GameCard = ({ gameData }) => {
  return (
    <div>
      <div className="my-10">
        <h2 class="text-4xl font-extrabold">{ gameData.title }</h2>
      </div>

      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={ gameData.teamLocal } alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{ gameData.date }</div>
            <div className="text-2xl text-center font-bold">
              { gameData.info2 }
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 2</div>
          </div>

          <div className="">
            <img src={ gameData.teamVisitor } alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={ gameData.teamLocal } alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{ gameData.date }</div>
            <div className="text-2xl text-center font-bold">
              { gameData.info1 }
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 1</div>
          </div>

          <div className="">
            <img src={ gameData.teamVisitor } alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
