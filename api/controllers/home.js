import Deriv from "../models/Deriv";
import FirstEU from "../models/FirstEU";
import SecondEU from "../models/SecondEU";

export const getIndex = async (req, res) => {
  try {
    // retrieve data from the mongoose model and limit it to the first 100
    const deriv = await Deriv.find().sort({ _id: 1 }).limit(100);
    const firstEU = await FirstEU.find().sort({ _id: 1 }).limit(100);
    const secondEU = await SecondEU.find().sort({ _id: 1 }).limit(100);

    const data = {
      deriv,
      firstEU,
      secondEU,
    };
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const postIndex = async (req, res) => {
  try {
    // sends the data to react for rendering
    const { balance, equity, time } = req.body.deriv;
    
    const newDeriv = await Deriv.create({ balance, equity, time });
    const newFirstEU = await FirstEU.create({ balance, equity, time });
    const newSecondEU = await SecondEU.create({ balance, equity, time });

    const data = {
      deriv: newDeriv,
      firstEU: newFirstEU,
      secondEU: newSecondEU,
    };

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
