import { Match } from '../models/match';
import { Tournament } from '../models/tournament';

export const generateEliminationBracket = (teams: string[]): Match[] => {
    const matches: Match[] = [];
    const totalTeams = teams.length;
    const rounds = Math.ceil(Math.log2(totalTeams));

    for (let round = 0; round < rounds; round++) {
        const matchesInRound = Math.pow(2, rounds - round - 1);
        for (let matchIndex = 0; matchIndex < matchesInRound; matchIndex++) {
            const team1Index = matchIndex * 2;
            const team2Index = matchIndex * 2 + 1;
            if (team1Index < totalTeams && team2Index < totalTeams) {
                matches.push({
                    id: `${round}-${matchIndex}`,
                    team1: teams[team1Index],
                    team2: teams[team2Index],
                    round: round + 1,
                    status: 'scheduled',
                });
            }
        }
    }
    return matches;
};

export const updateMatchResult = (matchId: string, winner: string, matches: Match[]): Match[] => {
    return matches.map(match => {
        if (match.id === matchId) {
            match.status = 'completed';
            match.winner = winner;
        }
        return match;
    });
};

export const getNextMatch = (currentMatchId: string, matches: Match[]): Match | null => {
    const currentMatchIndex = matches.findIndex(match => match.id === currentMatchId);
    if (currentMatchIndex === -1 || currentMatchIndex % 2 === 0) {
        return null; // No next match if it's the last match or not a valid match
    }
    const nextMatchIndex = currentMatchIndex + 1;
    return matches[nextMatchIndex] || null;
};

export const createTournamentBracket = async (tournamentId: string, teams: string[]): Promise<Match[]> => {
    const matches = generateEliminationBracket(teams);
    await Tournament.update({ matches }, { where: { id: tournamentId } });
    return matches;
};