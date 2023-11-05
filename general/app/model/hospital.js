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
      const {hospitalid, category  } = data;
      HospitalModel.findById(hospitalid, (err, document) => {
        if (err) {
          console.error(err);
          return;
        }
      
        // Assuming there's an array field called 'items' in your document
        category.forEach((item) => {
          document.category.push(item); // Add each item to the 'items' array
        });
      
        // Save the updated document
        document.save((saveErr) => {
          if (saveErr) {
            console.error(saveErr);
          } else {
            console.log('Items added to the document successfully.');
          }
        });
      });
      return 'success';
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
  retrievesinglehospitalModel, hospitaladdcategoryModel
};
