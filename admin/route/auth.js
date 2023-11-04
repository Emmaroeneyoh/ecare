const { adminSignupController, adminLoginController, adminNewPasswordLink, adminresetPassword } = require("../app/controller/auth");
const { adminsignupValidation, adminforgotpasswordValidation, adminLoginValidation, adminResetpasswordValidation } = require("../core/validation/auth");

const router = require("express").Router();

router.post("/signup", adminsignupValidation, adminSignupController);
router.post("/login",  adminLoginValidation, adminLoginController);
router.post("/forgot/password", adminforgotpasswordValidation, adminNewPasswordLink);
router.post("/reset/password", adminResetpasswordValidation, adminresetPassword);




module.exports = router