const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  building: {
    type: Schema.Types.ObjectId,
    ref: "Building",
    required: true
  },
  roomNo: {
    type: String,
    required: true
  },
  sharing: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
