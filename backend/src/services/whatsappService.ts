import axios from 'axios';

const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';
const WHATSAPP_API_KEY = process.env.WHATSAPP_API_KEY; // Ensure to set your WhatsApp API key in environment variables

export const sendWhatsAppNotification = async (phoneNumber, message) => {
    try {
        const response = await axios.post(WHATSAPP_API_URL, {
            phone: phoneNumber,
            text: message,
            headers: {
                'Authorization': `Bearer ${WHATSAPP_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp notification:', error);
        throw new Error('Failed to send WhatsApp notification');
    }
};