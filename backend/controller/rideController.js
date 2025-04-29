import Driver from '../models/Driver.js';
import Ride from '../models/Ride.js';
import Rider from '../models/Rider.js';
import mongoose from 'mongoose';


export const requestRide = async (req, res) => {
  try {
    const { riderId, pickupLongitude, pickupLatitude, dropoffLongitude, dropoffLatitude } = req.body;
    if (!riderId || pickupLongitude === undefined || pickupLatitude === undefined || dropoffLongitude === undefined || dropoffLatitude === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const pickupPoint = {
      type: 'Point',
      coordinates: [pickupLongitude, pickupLatitude],
    };

    const dropoffPoint = {
      type: 'Point',
      coordinates: [dropoffLongitude, dropoffLatitude],
    };
    if (!mongoose.Types.ObjectId.isValid(riderId)) {
      return res.status(400).json({ message: 'Invalid Rider ID format' });
    }
    const rider = await Rider.findById(riderId);
    if (!rider) return res.status(404).json({ message: 'only a rider can make a Pathao ride request' });

    // Find nearest available driver
    const nearestDriver = await Driver.findOne({
      isOnline: true,
      currentLocation: {
        $near: {
          $geometry: pickupPoint,
          $maxDistance: 5000, // 5 km radius
        },
      },
    });

    if (!nearestDriver) {
      return res.status(404).json({ message: 'No nearby drivers available' });
    }

    // Create Ride
    const ride = await Ride.create({
      rider: riderId,
      driver: nearestDriver._id,
      pickupLocation: pickupPoint,
      dropoffLocation: dropoffPoint,
      status: 'requested',
    });

    res.status(201).json({ message: 'Ride requested', rideId: ride._id, driverId: nearestDriver._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const acceptRide = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Ride.findById(id);
    if (!ride) return res.status(404).json({ message: 'Ride not found' });

    ride.status = 'accepted';
    await ride.save();

    res.status(200).json({ message: 'Ride accepted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const startRide = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Ride.findById(id);
    if (!ride) return res.status(404).json({ message: 'Ride not found' });

    ride.status = 'started';
    await ride.save();

    res.status(200).json({ message: 'Ride started' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const endRide = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Ride.findById(id);
    if (!ride) return res.status(404).json({ message: 'Ride not found' });

    ride.status = 'ended';
    await ride.save();

    res.status(200).json({ message: 'Ride ended' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const cancelRide = async (req, res) => {
  try {
    const { id } = req.params;
    const ride = await Ride.findById(id);
    if (!ride) return res.status(404).json({ message: 'Ride not found' });

    ride.status = 'cancelled';
    await ride.save();

    res.status(200).json({ message: 'Ride cancelled' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const fetchNearbyRides = async (req, res) => {
    try {
      const { longitude, latitude } = req.query;
      if (longitude === undefined || latitude === undefined) {
        return res.status(400).json({ message: 'Longitude and latitude are required' });
      }
  
      const pickupPoint = {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      };
  
      // Find rides that are requested and close to driver's location
      const nearbyRides = await Ride.find({
        status: 'requested',
        pickupLocation: {
          $near: {
            $geometry: pickupPoint,
            $maxDistance: 5000 // 5 km
          }
        }
      }).populate('rider');
  
      res.status(200).json({ rides: nearbyRides });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  
