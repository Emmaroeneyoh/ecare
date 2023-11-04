const { WardModel } = require("../../../general/core/db/ward");



const createwardModel = async (data, res) => {
    try {
      const {
        wardname
      } = data;
      const form = await new WardModel ({
          ward: wardname
         
      });
     
      const userDetails = await form.save()
     
  
      return userDetails;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};



const updatewardModel = async (data, res) => {
    try {
      const {
        wardname , wardid
      } = data;
        const form = await WardModel.findByIdAndUpdate(wardid, {
            $set: {
                ward : wardname
          }
      })
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
const retrievesinglewardModel = async (data, res) => {
    try {
      const {
         wardid
      } = data;
        const form = await WardModel.findById(wardid)
      return form;
    } catch (error) {
      console.log('error' , error);
      return error.message;
     
    }
};
module.exports = {
    createwardModel ,updatewardModel , retrievesinglewardModel
}