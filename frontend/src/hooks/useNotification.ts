import { useEffect, useState } from 'react';

const useNotification = () => {
    const [notifications, setNotifications] = useState<string[]>([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:4000'); // Adjust the URL as needed

        socket.onmessage = (event) => {
            const newNotification = event.data;
            setNotifications((prev) => [...prev, newNotification]);
        };

        return () => {
            socket.close();
        };
    }, []);

    const clearNotifications = () => {
        setNotifications([]);
    };

    return {
        notifications,
        clearNotifications,
    };
};

export default useNotification;