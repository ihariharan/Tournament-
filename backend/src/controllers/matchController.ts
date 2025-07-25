import { Request, Response } from 'express';
import Match from '../models/match';
import { groupPlayersIntoRooms } from '../services/roomGroupingService';
import { sendWhatsAppNotification } from '../services/whatsappService';
import { WebSocketServer } from '../services/websocketService';

// Create a new match
export const createMatch = async (req: Request, res: Response) => {
    try {
        const { tournamentId, map, players } = req.body;
        const match = await Match.create({ tournamentId, map, players });
        
        // Group players into rooms
        const rooms = groupPlayersIntoRooms(players);
        
        // Notify players via WhatsApp
        rooms.forEach(room => {
            sendWhatsAppNotification(room.id, `Room ID: ${room.id} has been created for the match.`);
        });

        res.status(201).json({ match, rooms });
    } catch (error) {
        res.status(500).json({ message: 'Error creating match', error });
    }
};

// Update match details
export const updateMatch = async (req: Request, res: Response) => {
    try {
        const { matchId } = req.params;
        const updatedMatch = await Match.update(req.body, { where: { id: matchId } });
        
        if (updatedMatch[0] === 0) {
            return res.status(404).json({ message: 'Match not found' });
        }

        res.status(200).json({ message: 'Match updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating match', error });
    }
};

// Get match details
export const getMatch = async (req: Request, res: Response) => {
    try {
        const { matchId } = req.params;
        const match = await Match.findByPk(matchId);
        
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }

        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching match', error });
    }
};

// Live updates for matches
export const liveMatchUpdates = (ws: WebSocketServer) => {
    ws.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });

        // Logic to send live updates
        // This can be implemented based on match events
    });
};