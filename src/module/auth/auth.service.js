import UserModel from "../../model/user.model.js"
// ADD NEW USER 
export const addNewUserService = async (data)=>{
    return await UserModel.create(data)
}
// GET ALL USER
export const getAllUsersService = async ()=>{
    return await UserModel.find()
}
// GET USER BY ID
export const getUserByIdService =  (userId)=>{
    return  UserModel.findOne({
        _id : userId
    })
}