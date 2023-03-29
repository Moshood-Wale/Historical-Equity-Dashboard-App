import mongoose from "mongoose";

const FirstEUSchema = new mongoose.Schema({
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

const FirstEU = mongoose.model("FirstEU", FirstEUSchema);

export default FirstEU;
