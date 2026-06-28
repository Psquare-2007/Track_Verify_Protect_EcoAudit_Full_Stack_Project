import mongoose from "mongoose";

const wasteSchema = new mongoose.Schema(
  {
    wasteType: {
      type: String,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Waste", wasteSchema);