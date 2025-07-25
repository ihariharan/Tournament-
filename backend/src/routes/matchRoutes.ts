import { Router } from 'express';
import { createMatch, getMatch, updateMatch, deleteMatch, scheduleMatch } from '../controllers/matchController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

// Route to create a new match
router.post('/', authMiddleware, roleMiddleware(['admin']), createMatch);

// Route to get match details
router.get('/:id', getMatch);

// Route to update match details
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateMatch);

// Route to delete a match
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteMatch);

// Route to schedule a match
router.post('/schedule', authMiddleware, roleMiddleware(['admin']), scheduleMatch);

export default router;