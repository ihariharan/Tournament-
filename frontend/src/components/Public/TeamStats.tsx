import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamStats: React.FC = () => {
    const [teamStats, setTeamStats] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeamStats = async () => {
            try {
                const response = await axios.get('/api/leaderboard/team-stats');
                setTeamStats(response.data);
            } catch (error) {
                console.error('Error fetching team stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamStats();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
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
                        <th className="border-b-2 border-gray-300 px-4 py-2">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teamStats.map((team) => (
                        <tr key={team.id}>
                            <td className="border-b border-gray-300 px-4 py-2">{team.name}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.matchesPlayed}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.wins}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.losses}</td>
                            <td className="border-b border-gray-300 px-4 py-2">{team.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamStats;