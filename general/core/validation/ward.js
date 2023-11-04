const joi = require("joi");
const { handleError } = require("../../../user/core/utils");

const createwardValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
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
const updatewardValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      ward: joi.string().required(),
      wardid: joi.string().required(),
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
const retrievedeletewardValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      wardid: joi.string().required(),
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
    createwardValidation , updatewardValidation , retrievedeletewardValidation
}