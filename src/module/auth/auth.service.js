import UserModel from "../../model/user.model.js"

// ADD NEW USER 
export const addNewUserService = async (data)=>{
    return await UserModel.create(data)
}