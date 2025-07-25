import express from 'express';
import { json } from 'body-parser';
import { connectToDatabase } from './config/db';
import authRoutes from './routes/authRoutes';
import tournamentRoutes from './routes/tournamentRoutes';
import matchRoutes from './routes/matchRoutes';
import leaderboardRoutes from './routes/leaderboardRoutes';
import notificationRoutes from './routes/notificationRoutes';
import { initializeWebSocket } from './services/websocketService';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());

// Database connection
connectToDatabase();

// Initialize WebSocket for live updates
initializeWebSocket(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});