import mongoose from "mongoose";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";
const userSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true, minlength: 5 },
  phone: { type: "Number", maxlength: 10 },
  company: { type: "String" },
});

const applicantSchema = new mongoose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true, minlength: 5 },
  phone: { type: "Number", maxlength: 10 },
  institute: { type: "String", required: true },
  typeOfExp: { type: "String" },
  yearOfPassedout: { type: "Number", maxlength: 4 },
});

const User = mongoose.model("recruiterDetails", userSchema);
const Applicant = mongoose.model("applicantDetails", applicantSchema);

const recruiterValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    phone: Joi.number().label("Phone"),
    company: Joi.string().label("Company"),
  });
  return schema.recruiterValidate(data);
};
const applicantValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    phone: Joi.number().label("Phone"),
    institute: Joi.string().label("Institute Name"),
    typeOfExp: Joi.string().label("Type of Experience"),
    yearOfPassedout: Joi.number().label("Year of Passedout"),
  });
  return schema.applicantValidate(data);
};

export { User, Applicant, recruiterValidate, applicantValidate };
