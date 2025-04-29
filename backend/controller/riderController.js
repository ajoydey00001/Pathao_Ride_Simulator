import mongoose from "mongoose";
import Rider from "../models/Rider.js";


export const registerRider = async (req, res) => {
  try {
    const { phone, email } = req.body;

    if (!phone || !email) {
      return res.status(400).json({ message: 'Phone and email are required' });
    }

    const newRider = await Rider.create({ phone, email });
    res.status(201).json({
      id: newRider._id,
      phone: newRider.phone,
      type: 'rider'
    });
  } catch (error) {
    console.error('Rider registration error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const riderLogin = async (req, res) => {
    try {
      const { phone, longitude, latitude } = req.body;
      if (!phone || longitude === undefined || latitude === undefined) {
        return res.status(400).json({ message: 'Phone, longitude and latitude are required' });
      }
  
      const rider = await Rider.findOne({ phone });
      if (!rider) {
        return res.status(404).json({ message: 'Rider not found' });
      }
  
      res.status(200).json({ message: 'Rider login location received' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

