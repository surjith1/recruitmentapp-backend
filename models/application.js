import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    title: { type: String },
    rating: { type: Number },
    years: { type: String },
    salary: { type: String },
    address: { type: String },
    jstitle: { type: String },
    skilltitle: { type: String },
    skillContent: { type: Array },
    qualificationContnet: { type: Array },
    roletitle: { type: String },
    rolecontent: { type: String },
    apply: { type: String },
    isApply: { type: Boolean },
  },
  { timestamps: true }
);

export const applicationList = mongoose.model(
  "ApplicationList",
  applicationSchema
);
