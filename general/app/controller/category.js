const { CategoryModel } = require("../../core/db/category");
const { createcategoryModel, updatecategoryModel, retrievesinglecategoryModel } = require("../model/category");



const createcategoryController = async (req, res, next) => {
    const { category , description } = req.body;
    const categoryname = category.toLowerCase();
    try {
      const cat = await CategoryModel.findOne({ category: categoryname});
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
       categoryname , description
      };
  
      let trainee = await createcategoryModel(data, res);
  
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
  

const updatecategoryController = async (req, res, next) => {
    const { description, categoryid  , category} = req.body;
    const categoryname = category.toLowerCase();
    try {
      const cat = await CategoryModel.findOne({ category: categoryname });
      if (cat) {
        if (cat._id !== categoryid) {
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
        description, categoryid , categoryname
      };
  
      let trainee = await updatecategoryModel(data, res);
  
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
  
  const retrievesinglecategoryController = async (req, res, next) => {
    const { categoryid } = req.body;
    try {
      const data = {
        categoryid,
      };
  
      let trainee = await retrievesinglecategoryModel(data, res);
  
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
  
  const deletecategoryController = async (req, res, next) => {
    const { categoryid } = req.body;
    try {
      let trainee = await CategoryModel.findByIdAndDelete(categoryid);
  
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
  
  const retrieveallcategoryController = async (req, res, next) => {
    try {
      let trainee = await CategoryModel.find();
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
    createcategoryController,
    deletecategoryController,
    updatecategoryController,
    retrieveallcategoryController,
    retrievesinglecategoryController,
  };
  