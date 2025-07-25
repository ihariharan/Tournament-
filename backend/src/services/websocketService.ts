import { Server } from 'socket.io';

let io: Server;

export const initWebSocket = (server: any) => {
    io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};

export const sendMatchUpdate = (matchId: string, update: any) => {
    if (io) {
        io.emit(`match-update-${matchId}`, update);
    }
};