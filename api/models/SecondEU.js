import mongoose from "mongoose";

const SecondEUSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const SecondEU = mongoose.model("SecondEU", SecondEUSchema);

export default SecondEU;
