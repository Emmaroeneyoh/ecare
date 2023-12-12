const { CategoryModel } = require("../../../general/core/db/category");
const { HospitalModel } = require("../../../general/core/db/hospital");
const { WardModel } = require("../../../general/core/db/ward");

const filter_user_hospital_model = async (datas, res) => {
  try {
    const { query } = datas;
    console.log(query.$and);
    console.log(query.$and.length);

    if (query.$and.length == 0) {
      const hospital = await HospitalModel.find().populate({
        path: "ward",
        select: "name",
      });
      const categories = await CategoryModel.find();
      const ward = await WardModel.find();
      const filterdata = {
        hospital,
        categories,
        ward,
      };
      return filterdata;
    }
    const hospital = await HospitalModel.find(query).populate({
      path: "ward",
      select: "name",
    });
    const categories = await CategoryModel.find();
    const ward = await WardModel.find();
    const filterdata = {
      hospital,
      categories,
      ward,
    };
    return filterdata;    
  } catch (error) {
    console.log(error);
    handleError(error.message)(res);
  }
};

const userretrievesinglehospitalModel = async (data, res) => {
  try {
    const { hospitalid } = data;
    const hospital = await HospitalModel.findById(hospitalid).populate({
      path: "ward",
      select: "name",
    });
    const catid = hospital.category;
    const cat = catid.map((item) => item.categoryid.toHexString());
    console.log("tho cat", cat);
    const category = await CategoryModel.find({ _id: { $in: cat } });

    const info = { hospital, category };
    return info;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
const userlandingpagelModel = async (data, res) => {
  try {
    const hospital = await HospitalModel.countDocuments();
    const ward = await WardModel.countDocuments();
    const category = await CategoryModel.countDocuments();

    const tophospital = await HospitalModel.find()
      .limit(6)
      .select("name image");
    const topcategories = await CategoryModel.find()
      .limit(6)
      .select("name description");

    const info = { hospital, category, ward, tophospital, topcategories };
    return info;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

const userdashboardModel = async (data, res) => {
  try {
    const hospital = await HospitalModel.countDocuments();
    const graphhospital = await HospitalModel.find().select("category name");
    const category = await CategoryModel.countDocuments();
    const ward = await WardModel.countDocuments();

    const landingpage = { hospital, category, ward, graphhospital };
    return landingpage;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

module.exports = {
  filter_user_hospital_model,
  userretrievesinglehospitalModel,
  userlandingpagelModel, userdashboardModel 
};
