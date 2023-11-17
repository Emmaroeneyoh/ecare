const joi = require("joi");
const { handleError } = require("../../../user/core/utils");

const createhospitalValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    name: joi.string().required(),
    phone: joi.string().required(),
    easting: joi.string().required(),
    northing: joi.string().required(),
    ownership: joi.string().required(),
    facility_type: joi.string().required(),
    type: joi.string().required(),
    address: joi.string().required(),
    ward: joi.string().required(),
    category: joi.array().required(),
    image: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const updatehospitalValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    hospitalid: joi.string().required(),
    name: joi.string().required(),
    phone: joi.string().required(),
    easting: joi.string().required(),
    northing: joi.string().required(),
    ownership: joi.string().required(),
    facility_type: joi.string().required(),
    type: joi.string().required(),
    address: joi.string().required(),
    ward: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const retrievedeletehospitalValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    hospitalid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const addhospitalcategoryValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    hospitalid: joi.string().required(),
    category: joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};

const addhospitalimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    hospitalid: joi.string().required(),
    url: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
const removehospitalimageValidation = (req, res, next) => {
  const schema = joi.object({
    adminid: joi.string().required(),
    hospitalid: joi.string().required(),
    urlid: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    let err = error.details[0].message;
    // let errlen = err.split(' ')
    // console.log('this is length ' , errlen.length)
    handleError(err)(res);
  }
  return next();
};
module.exports = {
  retrievedeletehospitalValidation,
  createhospitalValidation,
  updatehospitalValidation,
  addhospitalcategoryValidation,
  removehospitalimageValidation, addhospitalimageValidation
};
