import express from 'express';
import {
  requestRide,
  acceptRide,
  startRide,
  endRide,
  cancelRide,
    fetchNearbyRides,
} from '../controller/rideController.js';

const router = express.Router();

// Rider requests a ride
router.post('/request', requestRide);

// Driver accepts a ride
router.post('/:id/accept', acceptRide);

// Driver starts ride
router.post('/:id/start', startRide);

// Driver ends ride
router.post('/:id/end', endRide);

// Rider cancels ride
router.post('/:id/cancel', cancelRide);

router.get('/nearby', fetchNearbyRides);


export default router;
