const { userSignupController, userLoginController, userNewPasswordLink, userresetPassword } = require("../app/controller/auth");
const { userretrievesinglehospiotalController, user_hospital_controller, userlandingpageController, userdashboardController } = require("../app/controller/landingpage");
const { usersignupValidation, userLoginValidation, userforgotpasswordValidation, userResetpasswordValidation } = require("../core/validation/auth");
const { retrievesinglehospitalValidation } = require("../core/validation/landingpage");

const router = require("express").Router();

router.post("/signup", usersignupValidation, userSignupController);
router.post("/login",  userLoginValidation, userLoginController);
router.post("/forgot/password", userforgotpasswordValidation, userNewPasswordLink);
router.post("/reset/password", userResetpasswordValidation, userresetPassword);


//hospital
router.post("/retrieve/single/hospital", retrievesinglehospitalValidation, userretrievesinglehospiotalController);
router.post("/retrieve/hospital",  user_hospital_controller);
router.post("/landingpage", userlandingpageController);
router.post("/dashboard", userdashboardController);



module.exports = router