const { admin_check_token } = require("../../admin/core/authorisation");
const { adminValidation } = require("../../admin/core/validation/auth");
const {
  createcategoryController,
  updatecategoryController,
  deletecategoryController,
  retrievesinglecategoryController,
  retrieveallcategoryController,
} = require("../app/controller/category");
const { createhospitalController, updatehospitalController, deletehospitalController, retrievesinglehospitalController, retrieveallhospitalController, hospitaladdcategoryController, hospitalremovecategoryController } = require("../app/controller/hospital");
const {
  createwardController,
  updatewardController,
  deletewardController,
  retrievesinglewardController,
  retrieveallwardController,
} = require("../app/controller/ward");
const {
  createcategoryValidation,
  updatecategoryValidation,
  retrievedeletecategoryValidation,
} = require("../core/validation/category");
const { createhospitalValidation, updatehospitalValidation, retrievedeletehospitalValidation, addhospitalcategoryValidation } = require("../core/validation/hospital");
const {
  createwardValidation,
  updatewardValidation,
  retrievedeletewardValidation,
} = require("../core/validation/ward");

const router = require("express").Router();

//ward

router.post(
  "/create/ward",
  createwardValidation,
  admin_check_token,
  createwardController
);
router.post(
  "/update/ward",
  updatewardValidation,
  admin_check_token,
  updatewardController
);
router.post(
  "/delete/ward",
  retrievedeletewardValidation,
  admin_check_token,
  deletewardController
);
router.post(
  "/retrieve/single/ward",
  retrievedeletewardValidation,
  admin_check_token,
  retrievesinglewardController
);
router.post(
  "/retrieve/all/ward",
  adminValidation,
  admin_check_token,
  retrieveallwardController
);

//category
router.post(
  "/create/category",
  createcategoryValidation,
  admin_check_token,
  createcategoryController
);
router.post(
  "/update/category",
  updatecategoryValidation,
  admin_check_token,
  updatecategoryController
);
router.post(
  "/delete/category",
  retrievedeletecategoryValidation,
  admin_check_token,
 deletecategoryController
);
router.post(
  "/retrieve/single/category",
  retrievedeletecategoryValidation,
  admin_check_token,
 retrievesinglecategoryController
);
router.post(
  "/retrieve/all/category",
  adminValidation,
  admin_check_token,
 retrieveallcategoryController
);


//hospital
router.post(
    "/create/hospital",
    createhospitalValidation,
    admin_check_token,
    createhospitalController
  );
router.post(
    "/update/hospital",
    updatehospitalValidation,
    admin_check_token,
    updatehospitalController
  );
router.post(
    "/delete/hospital",
    retrievedeletehospitalValidation,
    admin_check_token,
    deletehospitalController
  );
router.post(
    "/retrieve/single/hospital",
    retrievedeletehospitalValidation,
    admin_check_token,
    retrievesinglehospitalController
  );
router.post(
    "/retrieve/all/hospital",
    adminValidation,
    admin_check_token,
    retrieveallhospitalController
  );
router.post(
    "/hospital/add/category",
    addhospitalcategoryValidation,
    admin_check_token,
    hospitaladdcategoryController
  );
router.post(
    "/hospital/remove/category",
    addhospitalcategoryValidation,
    admin_check_token,
    hospitalremovecategoryController
  );

module.exports = router;
