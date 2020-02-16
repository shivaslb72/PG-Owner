const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tanentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  adhaar: {
    type: String,
    required: true,
    minlength: 12,
    maxlength: 12
  },
  building: {
    type: Schema.Types.ObjectId,
    ref: "Building",
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  }
});

const Tanent = mongoose.model("Tanent", tanentSchema);
module.exports = Tanent;
