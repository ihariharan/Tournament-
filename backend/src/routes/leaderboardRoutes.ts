import { Router } from 'express';
import { getLeaderboard, updateLeaderboard } from '../controllers/leaderboardController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

// Route to get the leaderboard
router.get('/', getLeaderboard);

// Route to update the leaderboard (admin only)
router.put('/', authMiddleware, roleMiddleware('admin'), updateLeaderboard);

export default router;