const { CategoryModel } = require("../../core/db/category");


const createcategoryModel = async (data, res) => {
    try {
      const {
        categoryname , description
      } = data;
      const form = await new CategoryModel ({
        category : categoryname , description
         
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};



const updatecategoryModel = async (data, res) => {
    try {
      const {
        description , categoryid , categoryname
      } = data;
        const form = await CategoryModel.findByIdAndUpdate(categoryid, {
            $set: {
              category: categoryname , description
          }
      })
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
const retrievesinglecategoryModel = async (data, res) => {
    try {
      const {
         categoryid
      } = data;
        const form = await CategoryModel.findById(categoryid)
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
module.exports = {
    createcategoryModel ,updatecategoryModel , retrievesinglecategoryModel
}