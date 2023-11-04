
const jwt = require('jsonwebtoken');
const { userjwt } = require('../../general/core/utils');

const age = 1 * 24 * 60 * 60;
const create_user_token = (user) => {
  return jwt.sign({ user }, userjwt, {
    expiresIn: age,
  });
};
const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}

module.exports = {
    create_user_token , handleError
}