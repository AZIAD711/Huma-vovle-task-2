import {addNewUserController} from "./auth.controller.js"
import express from "express"
const userRouter = express.Router()
// http://localhost:4000/api/v1/user/add
userRouter.post("/add",addNewUserController)
export default userRouter;