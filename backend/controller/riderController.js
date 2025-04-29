import mongoose from "mongoose";
import Rider from "../models/Rider.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

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
      console.error(error);
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
  
      // Optionally, save rider's last known location if you modify Rider model to have location field
      // rider.location = { type: 'Point', coordinates: [longitude, latitude] };
      // await rider.save();
  
      res.status(200).json({ message: 'Rider login location received' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };

