const { userSignupController, userLoginController, userNewPasswordLink, userresetPassword } = require("../app/controller/auth");
const { usersignupValidation, userLoginValidation, userforgotpasswordValidation, userResetpasswordValidation } = require("../core/validation/auth");

const router = require("express").Router();

router.post("/signup", usersignupValidation, userSignupController);
router.post("/login",  userLoginValidation, userLoginController);
router.post("/forgot/password", userforgotpasswordValidation, userNewPasswordLink);
router.post("/reset/password", userResetpasswordValidation, userresetPassword);




module.exports = router