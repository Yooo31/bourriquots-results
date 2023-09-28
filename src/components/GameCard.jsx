import React from 'react';

const GameCard = ({ dataReceived }) => {
  return (
    <div>
      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={ dataReceived.teamLocal } alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{ dataReceived.date }</div>
            <div className="text-2xl text-center font-bold">
              { dataReceived.info2 }
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 2</div>
          </div>

          <div className="">
            <img src={ dataReceived.teamVisitor } alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md shadow-md mb-4">
        <div className="flex justify-evenly">
          <div className="">
            <img src={ dataReceived.teamLocal } alt="Team 1" className="mr-2" />
          </div>

          <div className="flex-col items-center">
            <div className="text-gray-600 text-center text-xs">{ dataReceived.date }</div>
            <div className="text-2xl text-center font-bold">
              { dataReceived.info1 }
            </div>
            <div className="text-gray-600 text-center text-xs">Équipe 1</div>
          </div>

          <div className="">
            <img src={ dataReceived.teamVisitor } alt="Team 2" className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
