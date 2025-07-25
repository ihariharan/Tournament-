import { Request, Response } from 'express';
import { Tournament } from '../models/tournament';
import { User } from '../models/user';
import { RoomGroupingService } from '../services/roomGroupingService';
import { WebSocketService } from '../services/websocketService';

// Create a new tournament
export const createTournament = async (req: Request, res: Response) => {
    try {
        const { name, map, date, participants } = req.body;
        const tournament = await Tournament.create({ name, map, date, participants });
        res.status(201).json(tournament);
    } catch (error) {
        res.status(500).json({ message: 'Error creating tournament', error });
    }
};

// Schedule a match for a tournament
export const scheduleMatch = async (req: Request, res: Response) => {
    try {
        const { tournamentId, matchDetails } = req.body;
        const tournament = await Tournament.findById(tournamentId);
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }
        tournament.matches.push(matchDetails);
        await tournament.save();
        WebSocketService.broadcastMatchUpdate(tournamentId, matchDetails);
        res.status(200).json(tournament);
    } catch (error) {
        res.status(500).json({ message: 'Error scheduling match', error });
    }
};

// Get all tournaments
export const getTournaments = async (req: Request, res: Response) => {
    try {
        const tournaments = await Tournament.find().populate('participants');
        res.status(200).json(tournaments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tournaments', error });
    }
};

// Get a specific tournament by ID
export const getTournamentById = async (req: Request, res: Response) => {
    try {
        const tournament = await Tournament.findById(req.params.id).populate('participants');
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }
        res.status(200).json(tournament);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tournament', error });
    }
};

// Delete a tournament
export const deleteTournament = async (req: Request, res: Response) => {
    try {
        const tournament = await Tournament.findByIdAndDelete(req.params.id);
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting tournament', error });
    }
};