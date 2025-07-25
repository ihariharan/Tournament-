import { LeaderboardEntry } from '../types';

export const calculateLeaderboard = (matches: any[], teams: any[]): LeaderboardEntry[] => {
    const leaderboard: { [key: string]: LeaderboardEntry } = {};

    matches.forEach(match => {
        match.results.forEach(result => {
            const teamId = result.teamId;
            const score = result.score;

            if (!leaderboard[teamId]) {
                leaderboard[teamId] = {
                    teamId,
                    totalPoints: 0,
                    totalMatches: 0,
                };
            }

            leaderboard[teamId].totalPoints += score;
            leaderboard[teamId].totalMatches += 1;
        });
    });

    return Object.values(leaderboard).sort((a, b) => b.totalPoints - a.totalPoints);
};

export const updateLeaderboard = (leaderboard: LeaderboardEntry[], teamId: string, points: number) => {
    const entry = leaderboard.find(entry => entry.teamId === teamId);
    if (entry) {
        entry.totalPoints += points;
        entry.totalMatches += 1;
    }
};