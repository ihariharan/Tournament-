import React, { useEffect, useState } from 'react';
import { useWebSocket } from '../../hooks/useWebSocket';

const LiveMatchUpdates: React.FC = () => {
    const [liveMatches, setLiveMatches] = useState([]);
    const { connect, disconnect } = useWebSocket('ws://localhost:4000/live-updates');

    useEffect(() => {
        connect((data: any) => {
            setLiveMatches((prevMatches) => {
                const updatedMatches = prevMatches.map((match) => 
                    match.id === data.id ? { ...match, ...data } : match
                );
                if (!updatedMatches.find(match => match.id === data.id)) {
                    updatedMatches.push(data);
                }
                return updatedMatches;
            });
        });

        return () => {
            disconnect();
        };
    }, [connect, disconnect]);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Live Match Updates</h2>
            <ul className="space-y-2">
                {liveMatches.map((match) => (
                    <li key={match.id} className="border p-2 rounded">
                        <h3 className="font-semibold">{match.title}</h3>
                        <p>Status: {match.status}</p>
                        <p>Score: {match.score}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LiveMatchUpdates;