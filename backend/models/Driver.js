import e from "express";
import mongoose from "mongoose";

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
    //   required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    otp: String,
  otpGeneratedAt: Date, 
    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },
 
  },
  {
    timestamps: true,
  }
);
driverSchema.index({ currentLocation: "2dsphere" });

const Driver = mongoose.model("Driver", driverSchema);
export default Driver;