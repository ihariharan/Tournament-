import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useWebSocket } from '../hooks/useWebSocket';
import { getMatchDetails } from '../api/matchApi';
import LiveMatchUpdates from '../components/Live/LiveMatchUpdates';

const Match = () => {
    const { matchId } = useParams();
    const [matchDetails, setMatchDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { sendMessage, messages } = useWebSocket(`ws://localhost:5000/match/${matchId}`);

    useEffect(() => {
        const fetchMatchDetails = async () => {
            try {
                const data = await getMatchDetails(matchId);
                setMatchDetails(data);
            } catch (error) {
                console.error('Error fetching match details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatchDetails();
    }, [matchId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{matchDetails.title}</h1>
            <p className="mt-2">Map: {matchDetails.map}</p>
            <p className="mt-2">Status: {matchDetails.status}</p>
            <LiveMatchUpdates messages={messages} />
        </div>
    );
};

export default Match;