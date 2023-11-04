const { WardModel } = require("../../../general/core/db/ward");
const { updatewardModel, retrievesinglewardModel, createwardModel } = require("../model/ward");

const createwardController = async (req, res, next) => {
  const { ward } = req.body;
  const wardname = ward.toLowerCase();
  try {
    const ward = await WardModel.findOne({ ward: wardname });
    if (ward) {
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: "ward already existed",
        data: [],
        error: "ward already existed",
      });
    }

    const data = {
      wardname,
    };

    let trainee = await createwardModel(data, res);

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

const updatewardController = async (req, res, next) => {
  const { ward, wardid } = req.body;
  const wardname = ward.toLowerCase();
  try {
    const ward = await WardModel.findOne({ ward: wardname });
    if (ward) {
      if (ward._id !== wardid) {
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
      wardname, wardid
    };

    let trainee = await updatewardModel(data, res);

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

const retrievesinglewardController = async (req, res, next) => {
  const { wardid } = req.body;
  try {
    const data = {
      wardid,
    };

    let trainee = await retrievesinglewardModel(data, res);

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

const deletewardController = async (req, res, next) => {
  const { wardid } = req.body;
  try {
    let trainee = await WardModel.findByIdAndDelete(wardid);

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

const retrieveallwardController = async (req, res, next) => {
  try {
    let trainee = await WardModel.find();
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
  createwardController,
  deletewardController,
  updatewardController,
  retrieveallwardController,
  retrievesinglewardController,
};
