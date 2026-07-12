import {addNewUserController,getAllUsersController,getUserByIdController} from "./auth.controller.js"
import express from "express"
const userRouter = express.Router()
// http://localhost:4000/api/v1/user/add
userRouter.post("/add",addNewUserController)
// http://localhost:4000/api/v1/user/
userRouter.get("/",getAllUsersController)
// http://localhost:4000/api/v1/user/:id
userRouter.get("/:id",getUserByIdController)
export default userRouter;