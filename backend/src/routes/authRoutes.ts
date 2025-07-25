import { Router } from 'express';
import { login, register, getUserProfile } from '../controllers/authController';
import { authenticate } from '../middleware/authMiddleware';
import { authorize } from '../middleware/roleMiddleware';

const router = Router();

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get user profile (protected route)
router.get('/profile', authenticate, getUserProfile);

// Example of role-based access control
router.get('/admin', authenticate, authorize('admin'), (req, res) => {
    res.send('Admin access granted');
});

export default router;