const { HospitalModel } = require("../../core/db/hospital");
const { handleError } = require("../../core/utils");
const {
  createhospitalModel,
  updatehospitalModel,
  retrievesinglehospitalModel,
  hospitaladdcategoryModel,
  hospitalremovecategoryModel,
} = require("../model/hospital");

const createhospitalController = async (req, res, next) => {
  const {
    name,
    easting,
    northing,
    ownership,
    address,
    facility_type,
    type,
    ward,
    category,
  } = req.body;
  const hospitalname = name.toLowerCase();
  try {
    const cat = await HospitalModel.findOne({ name: hospitalname });
    if (cat) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "ward already existed",
        data: [],
        error: "ward already existed",
      });
    }

    const data = {
      easting,
      northing,
      ownership,
      address,
      facility_type,
      type,
      hospitalname,
      ward,category
    };

    let trainee = await createhospitalModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};
const updatehospitalController = async (req, res, next) => {
  const {
    name,
    easting,
    northing,
    ownership,
    address,
    facility_type,
    type,
    hospitalid, ward
  } = req.body;
  const hospitalname = name.toLowerCase();
  try {
    const hospital = await HospitalModel.findOne({ name: hospitalname });
    if (hospital) {
      if (hospital._id !== hospitalid) {
        return res.status(400).json({
          status_code: 400,
          status: false,
          message: "ward already existed",
          data: [],
          error: "ward already existed",
        });
      }
    }

    const data = {
      easting,
      northing,
      ownership,
      address,
      facility_type,
      type,
      hospitalname,
      hospitalid, ward
    };

    let trainee = await updatehospitalModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const retrievesinglehospitalController = async (req, res, next) => {
  const { hospitalid } = req.body;
  try {
    const data = {
      hospitalid,
    };

    let trainee = await retrievesinglehospitalModel(data, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const deletehospitalController = async (req, res, next) => {
  const { hospitalid } = req.body;
  try {
    let trainee = await HospitalModel.findByIdAndDelete(hospitalid);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const retrieveallhospitalController = async (req, res, next) => {
  try {
    let trainee = await HospitalModel.find();
    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "login process successful",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const hospitaladdcategoryController = async (req, res, next) => {
    const { hospitalid, category } = req.body;
    try {
    //   const hospital = await HospitalModel.findById(hospitalid)
    //   const agency = hospital.category
    //   const checkagency = agency.find((x) => { return x.categoryid == categoryid })
    //   if (checkagency) {
    //     return res.status(400).json({
    //       status_code: 400,
    //       status: false,
    //       message: "transit already existed",
    //       data: [],
    //       error: "transit already existed",
    //     });
    //   }
      const data = {
        hospitalid, category
      };
  
      let trainee = await hospitaladdcategoryModel(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "login process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
const hospitalremovecategoryController = async (req, res, next) => {
    const { hospitalid, category } = req.body;
    try {
    //   const hospital = await HospitalModel.findById(hospitalid)
    //   const agency = hospital.category
    //   const checkagency = agency.find((x) => { return x.categoryid == categoryid })
    //   if (checkagency) {
    //     return res.status(400).json({
    //       status_code: 400,
    //       status: false,
    //       message: "transit already existed",
    //       data: [],
    //       error: "transit already existed",
    //     });
    //   }
      const data = {
        hospitalid, category
      };
  
      let trainee = await hospitalremovecategoryModel(data, res);
  
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "login process successful",
        data: trainee,
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res);
    }
  };
  
module.exports = {
  createhospitalController,
  deletehospitalController,
  updatehospitalController,
  retrieveallhospitalController,
  retrievesinglehospitalController, hospitaladdcategoryController , hospitalremovecategoryController
};
