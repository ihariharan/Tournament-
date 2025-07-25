import React from 'react';

interface RoomGroupProps {
  roomId: string;
  players: string[];
}

const RoomGroup: React.FC<RoomGroupProps> = ({ roomId, players }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Room ID: {roomId}</h2>
      <ul className="mt-2">
        {players.map((player, index) => (
          <li key={index} className="text-gray-700">
            {player}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomGroup;