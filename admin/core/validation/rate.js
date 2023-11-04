const joi = require("joi");
const { handleError } = require("../../../user/core/utils");


const admincreatenetworkrateValidation = (req, res, next) => {
    const schema = joi.object({
      adminid: joi.string().required(),
      name: joi.string().required(),
      sub_routeid: joi.string().required(),
      routeid: joi.string().required(),
      road_network_rating: joi.number().required(),
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
    admincreatenetworkrateValidation
}