const { CategoryModel } = require("../../core/db/category");
const { HospitalModel } = require("../../core/db/hospital");

const createhospitalModel = async (data, res) => {
  try {
    const {
      easting,
      northing,
      ownership,
      address,
      facility_type,
      type,
      hospitalname,
      ward,
      category,
      image, phone
    } = data;
    const form = await new HospitalModel({
      easting, phone,
      ward,
      northing,
      ownership,
      address,
      facility_type,
      category,
      type,
      image,
      name: hospitalname,
    });

    const userDetails = await form.save();

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const updatehospitalModel = async (data, res) => {
  try {
    const {
      easting,
      northing,
      ownership,
      address,
      facility_type,
      type,
      hospitalname,
      hospitalid,
      ward,phone
    } = data;
    const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
      $set: {
        easting, phone ,
        ward,
        northing,
        ownership,
        address,
        facility_type,
        type,
        name: hospitalname,
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const retrievesinglehospitalModel = async (data, res) => {
  try {
    const { hospitalid } = data;
    const form = await HospitalModel.findById(hospitalid);
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const hospitaladdcategoryModel = async (data, res) => {
  try {
    const { hospitalid, category } = data;
    const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
      $push: {
        category,
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const hospitalremovecategoryModel = async (data, res) => {
  try {
    const { hospitalid, category } = data;
    const form = category.forEach(async (item) => {
      console.log(item);
      await HospitalModel.findByIdAndUpdate(hospitalid, {
        $pull: {
          category: { _id: item._id },
        },
      });
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const hospitaladdimageModel = async (data, res) => {
  try {
    const { url, hospitalid } = data;
    const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
      $push: {
        image: { url },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const hospitalremoveimageModel = async (data, res) => {
  try {
    const { urlid, hospitalid } = data;
    const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
      $pull: {
        image: { _id: urlid },
      },
    });
    return form;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  createhospitalModel,
  updatehospitalModel,
  retrievesinglehospitalModel,
  hospitaladdcategoryModel,
  hospitalremovecategoryModel, hospitalremoveimageModel , hospitaladdimageModel
};
