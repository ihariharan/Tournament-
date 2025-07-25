import { Request, Response } from 'express';
import { sendWhatsAppNotification } from '../services/whatsappService';

// Function to send registration confirmation
export const sendRegistrationConfirmation = async (req: Request, res: Response) => {
    const { phoneNumber, tournamentName, roomId } = req.body;

    try {
        const message = `You have successfully registered for the tournament: ${tournamentName}. Your room ID is: ${roomId}.`;
        await sendWhatsAppNotification(phoneNumber, message);
        res.status(200).json({ message: 'Registration confirmation sent successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send registration confirmation.' });
    }
};

// Function to send room ID notification
export const sendRoomIdNotification = async (req: Request, res: Response) => {
    const { phoneNumber, roomId } = req.body;

    try {
        const message = `Your room ID is: ${roomId}. Good luck!`;
        await sendWhatsAppNotification(phoneNumber, message);
        res.status(200).json({ message: 'Room ID notification sent successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send room ID notification.' });
    }
};