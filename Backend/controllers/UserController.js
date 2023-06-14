import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: "Користувача не знайдено",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неправильний логін або пароль",
      });
    }

    const token = jwt.sign(
      {
        _id: user._doc._id,
      },
      "secrete123",
      {
        expiresIn: "30d",
      }
    );

    res.json({ ...user._doc, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося війти",
    });
  }
};

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      passwordHash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._doc._id,
      },
      "secrete123",
      {
        expiresIn: "30d",
      }
    );

    res.json({ ...user._doc, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не вдалося зарегістріруватися",
    });
  }
};
