import { Router } from 'express';
import {
  createTournament,
  getTournaments,
  getTournamentById,
  updateTournament,
  deleteTournament,
  scheduleMatch,
} from '../controllers/tournamentController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

// Public routes
router.get('/', getTournaments);
router.get('/:id', getTournamentById);

// Protected routes
router.post('/', authMiddleware, roleMiddleware('admin'), createTournament);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateTournament);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteTournament);
router.post('/:id/schedule', authMiddleware, roleMiddleware('admin'), scheduleMatch);

export default router;