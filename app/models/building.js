const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  landmark: {
    type: String,
    required: true
  },
  minprice: {
    type: Number,
    required: true
  },
  maxprice: {
    type: Number,
    required: true
  },
  amenities: [{ type: Schema.Types.ObjectId, ref: "Amenity" }]
});

const Building = mongoose.model("Building", buildingSchema);
module.exports = Building;
