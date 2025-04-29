import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
    rider: { type: mongoose.Schema.Types.ObjectId, ref: 'Rider', required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
    pickupLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }, // [lng, lat]
    },
    dropoffLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true },
    },
    status: {
      type: String,
      enum: ['requested', 'accepted', 'started', 'ended', 'cancelled'],
      default: 'requested',
    },
  }, { timestamps: true });
  
  rideSchema.index({ pickupLocation: "2dsphere" });
const Ride = mongoose.model("Ride", rideSchema);
export default Ride;