const { AdminModel } = require("../../core/db/admin");
const { create_admin_token } = require("../../core/utils");

const adminSignupModel = async (data, res) => {
  try {
    const {
      name,
      userEmail,
      Harshpassword,
     
    } = data;
    const form = await new AdminModel ({
        name,
        email:userEmail,
       password : Harshpassword
       
    });
   
    const userDetails = await form.save()
    const token = create_admin_token(userDetails._id);
    const userData = {
      id: userDetails._id,
      email: userDetails.email,
      token, 
    };

    return userData;
  } catch (error) {
    console.log('error' , error);
    return error.message;
   
  }
};



const adminLoginModel = async (data,res) => {
  try {
    const { userEmail, } = data
     const userDetails = await AdminModel.findOne({ email:userEmail});
     const token = create_admin_token(userDetails._id)
     const userData = {
         id: userDetails._id,
         name: userDetails.name,
         email: userDetails.email,
         token,
      }
   
     return userData
  } catch (error) {
      return error.message
  }
     
}
 
module.exports = {
    adminSignupModel , adminLoginModel
}