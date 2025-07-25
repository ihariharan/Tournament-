import React from 'react';

interface LeaderboardEntry {
    rank: number;
    teamName: string;
    points: number;
}

interface LeaderboardTableProps {
    entries: LeaderboardEntry[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b">Rank</th>
                        <th className="py-2 px-4 border-b">Team Name</th>
                        <th className="py-2 px-4 border-b">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry) => (
                        <tr key={entry.rank} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{entry.rank}</td>
                            <td className="py-2 px-4 border-b">{entry.teamName}</td>
                            <td className="py-2 px-4 border-b">{entry.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardTable;