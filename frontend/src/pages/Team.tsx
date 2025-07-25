import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
    const [teamStats, setTeamStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamStats = async () => {
            try {
                const response = await axios.get('/api/teams/stats');
                setTeamStats(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamStats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Team Statistics</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Team Name</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Matches Played</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Wins</th>
                        <th className="border-b-2 border-gray-300 px-4 py-2">Losses</th>
                    </tr>
                </thead>
                <tbody>
                    {teamStats.map((team) => (
                        <tr key={team.id}>
                            <td className="border-b border-gray-300 px-4 py-2">{team.name}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.matchesPlayed}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.wins}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.losses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Team;