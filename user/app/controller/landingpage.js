const { handleError } = require("../../core/utils");
const {
  filter_user_hospital_model,
  userretrievesinglehospitalModel,
  userlandingpagelModel,
  userdashboardModel,
} = require("../model/landingpage");

const user_hospital_controller = async (req, res, next) => {
  try {
    const { name, ownership, facility_type, ward, type, category } = req.body;
    var query = { $and: [] };

    if (name != "") {
      query.$and.push({ name: name });
    }

    if (ownership != "") {
      query.$and.push({ ownership: ownership });
    }
    if (facility_type != "") {
      query.$and.push({ facility_type: facility_type });
    }
    if (type != "") {
      query.$and.push({ type: type });
    }
    if (category != "") {
      query.$and.push({ 'category.categoryid': category });
    }
    if (ward != "") {
      query.$and.push({ ward: ward });
    }
    console.log("this is query", query);
    const timerange = { query };

    let trainee = await filter_user_hospital_model(timerange, res);

    return res.status(200).json({
      status_code: 200,
      status: true,
      message: "all users logs retrieved",
      data: trainee,
    });
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const userretrievesinglehospiotalController = async (req, res, next) => {
  try {
    const { hospitalid } = req.body;
    const data = { hospitalid };
    let trainee = await userretrievesinglehospitalModel(data, res);
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
const userdashboardController = async (req, res, next) => {
  try {
    const data = "data";
    let trainee = await userdashboardModel(data, res);
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
const userlandingpageController = async (req, res, next) => {
  try {
    const data = { hospitalid: "hello" };
    let trainee = await userlandingpagelModel(data, res);
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
  user_hospital_controller,
  userretrievesinglehospiotalController,
  userlandingpageController, userdashboardController
};
