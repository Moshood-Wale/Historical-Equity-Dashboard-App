import mongoose from "mongoose";

const DerivSchema = new mongoose.Schema({
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

const Deriv = mongoose.model("Deriv", DerivSchema);

export default Deriv;
