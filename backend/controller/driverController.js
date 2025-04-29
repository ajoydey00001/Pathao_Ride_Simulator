import mongoose from 'mongoose';

import Driver from '../models/Driver.js';

import { generateOTP } from '../util/otpService.js';
export const registerDriver = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: 'Phone is required' });
    }

    const newDriver = await Driver.create({ phone });
    res.status(201).json({
      id: newDriver._id,
      phone: newDriver.phone,
      type: 'driver'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const loginDriver = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) {
      return res.status(400).json({ message: 'Phone is required' });
    }

    const driver = await Driver.findOne({ phone });
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    const otp = generateOTP();
    driver.otp = otp;
    await driver.save();

    // Here you would send OTP via SMS in real life
    console.log(`Generated OTP for driver ${phone}: ${otp}`);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateLocation = async (req, res) => {
    try {
        const { phone, longitude, latitude } = req.body;
        if (!phone || longitude === undefined || latitude === undefined) {
          return res.status(400).json({ message: 'Phone, longitude and latitude are required' });
        }
    
        const driver = await Driver.findOne({ phone });
        if (!driver) {
          return res.status(404).json({ message: 'Driver not found' });
        }
    
        driver.isOnline = true;
        driver.currentLocation = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };
        await driver.save();
    
        res.status(200).json({ message: 'Location updated and driver is online' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
};  

