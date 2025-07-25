import { Request, Response } from 'express';
import { Leaderboard } from '../models/leaderboard';
import { calculateLeaderboard } from '../utils/leaderboardLogic';

// Get the leaderboard for a specific tournament
export const getLeaderboard = async (req: Request, res: Response) => {
    const tournamentId = req.params.tournamentId;

    try {
        const leaderboard = await Leaderboard.findAll({
            where: { tournamentId },
            order: [['points', 'DESC']],
        });

        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard', error });
    }
};

// Update the leaderboard after a match
export const updateLeaderboard = async (req: Request, res: Response) => {
    const { tournamentId, matchResults } = req.body;

    try {
        const updatedLeaderboard = await calculateLeaderboard(tournamentId, matchResults);
        res.status(200).json(updatedLeaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error updating leaderboard', error });
    }
};