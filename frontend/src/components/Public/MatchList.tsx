import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await axios.get('/api/matches');
                setMatches(response.data);
            } catch (error) {
                console.error('Error fetching matches:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    if (loading) {
        return <div className="loader">Loading matches...</div>;
    }

    return (
        <div className="match-list">
            <h2 className="text-2xl font-bold mb-4">Upcoming and Live Matches</h2>
            <ul>
                {matches.map(match => (
                    <li key={match.id} className="border p-4 mb-2 rounded">
                        <h3 className="text-xl">{match.title}</h3>
                        <p>Date: {new Date(match.date).toLocaleString()}</p>
                        <p>Status: {match.status}</p>
                        <p>Map: {match.map}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;