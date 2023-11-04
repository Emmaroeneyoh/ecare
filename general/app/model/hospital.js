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
      ward,category
    } = data;
    const form = await new HospitalModel({
      easting, ward ,
      northing,
      ownership,
      address,
      facility_type,category,
      type,
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
      hospitalid,ward
    } = data;
    const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
      $set: {
        easting,ward,
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
      const {hospitalid, categoryid  } = data;
      const form = await HospitalModel.findByIdAndUpdate(hospitalid, {
        $push: {
          category: { categoryid },
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  const transitremoveagencyModel = async (data, res) => {
    try {
      const { agencyid, transitid } = data;
      const form = await TransitModel.findByIdAndUpdate(transitid, {
        $pull: {
          agency: { _id :agencyid },
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
};
