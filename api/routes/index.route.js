import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import vehicleRoutes from './vehicle.route';
import locationRoutes from './location.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);


// mount user routes at /vehicle
router.use('/vehicle', vehicleRoutes);


// mount user routes at /location
router.use('/location', locationRoutes);


export default router;