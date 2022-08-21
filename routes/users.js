import express from "express";
import bcrypt from "bcrypt";
import { User, Applicant } from "../models/user.js";

const router = express.Router();
router.post("/recruiter", async (req, res) => {
  try {
    const { name, email, password, phone, company } = req.body;
    let user = await User.findOne({
      name,
      email,
      password,
      phone,
      company,
    });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(password, salt);

    user = await new User({
      name,
      email,
      phone,
      company,
      password: hashPassword,
    }).save();
    res.status(200).send({ message: "Data Entered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/applicant", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      institute,
      typeOfExp,
      yearOfPassedout,
    } = req.body;
    let applicant = await new Applicant({
      name,
      email,
      password,
      phone,
      institute,
      typeOfExp,
      yearOfPassedout,
    }).save();
    res.status(200).send({ message: "Data Entered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/applicant", async (req, res) => {
  const list = await Applicant.find({}).sort({ createdAt: 1 });
  res.send(list);
});
router.get("/recruiter", async (req, res) => {
  const recruiter = await User.find({}).sort({ createdAt: 1 });
  res.send(recruiter);
});

export const userRoutes = router;
