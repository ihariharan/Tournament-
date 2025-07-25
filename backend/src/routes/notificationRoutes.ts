import { Router } from 'express';
import { sendWhatsAppNotification } from '../controllers/notificationController';

const router = Router();

// Route to send WhatsApp notification for room ID
router.post('/send-room-id', async (req, res) => {
    const { roomId, phoneNumber } = req.body;
    try {
        await sendWhatsAppNotification(roomId, phoneNumber);
        res.status(200).json({ message: 'Room ID notification sent successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send notification.', error });
    }
});

// Route to send WhatsApp notification for registration confirmation
router.post('/send-registration-confirmation', async (req, res) => {
    const { registrationDetails, phoneNumber } = req.body;
    try {
        await sendWhatsAppNotification(registrationDetails, phoneNumber);
        res.status(200).json({ message: 'Registration confirmation sent successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send confirmation.', error });
    }
});

export default router;