const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  mainRoadDistance: { type: String },
  rooms: { type: Number },
  bathrooms: { type: Number },
  size: { type: Number },
  images: [{ type: String }],
  coordinates: { lat: Number, lng: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
