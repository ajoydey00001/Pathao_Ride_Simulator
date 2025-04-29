import mongoose from "mongoose";

const riderSchema = mongoose.Schema(
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
    address: {
      type: String,
    //   required: true,
    },

 
  },
  {
    timestamps: true,
  }
);
const Rider = mongoose.model("Rider", riderSchema);
export default Rider;