import mongoose from "mongoose";
import { applicationList } from "./../models/application.js";

const getAllApplication = async (req, res) => {
  const list = await applicationList.find({}).sort({ createdAt: -1 });
  res.send(list);
};

const getApplicationById = async (req, res) => {
  const list = await applicationList.findById({
    _id: req.params.id,
  });
  res.send(list);
};
const createList = async (req, res, next) => {
  try {
    const {
      title,
      rating,
      years,
      salary,
      address,
      jstitle,
      skilltitle,
      skillContent,
      qualificationContnet,
      roletitle,
      rolecontent,
      apply,
      isApply,
    } = req.body;

    let list = await applicationList.insertMany(req.body);
    list.save();
    res.send(list);
  } catch (error) {
    res.send({ msg: "An Error Occured" });
  }
};

const updateApplicationById = async (req, res, next) => {
  try {
    const {
      _id,
      title,
      rating,
      years,
      salary,
      address,
      jstitle,
      skilltitle,
      skillContent,
      qualificationContnet,
      roletitle,
      rolecontent,
      apply,
      isApply,
    } = req.body;
    let updateData = {
      title,
      rating,
      years,
      salary,
      address,
      jstitle,
      skilltitle,
      skillContent,
      qualificationContnet,
      roletitle,
      rolecontent,
      apply,
      isApply,
    };
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ msg: "No Such records" });
    }
    const list = await applicationList.findOneAndUpdate(
      { _id: id },
      {
        $set: updateData,
      }
    );
    res.send(home);
  } catch (error) {
    res.send({ msg: "An Error Occured" });
  }
};

const deleteApplication = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const home = await applicationList.findOneAndDelete(_id);
    res.send(home);
  } catch (error) {
    res.send({ msg: "An Error Occured" });
  }
};
export {
  getAllApplication,
  getApplicationById,
  createList,
  updateApplicationById,
  deleteApplication,
};
