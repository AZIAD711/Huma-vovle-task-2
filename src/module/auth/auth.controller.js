import { addNewUserService ,getAllUsersService} from "./auth.service.js";
import { createdDataResponse,dataFoundResponse } from "../../common/response/sccuess.js";
import { internalServerResponse } from "../../common/response/error.js";

// ADD NEW USER
export const addNewUserController = async (request, response) => {
    try {
        const userData = request.body;

        const user = await addNewUserService(userData);

        return createdDataResponse({
            response,
            message: "User",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);
        return internalServerResponse({
            response,
            message:error.message
        });
    }
};
// GET ALL USERS
export const getAllUsersController = async (request, response) => {
    try {
        const user = await getAllUsersService();

        return dataFoundResponse({
            response,
            message: "USERS",
            data: user,
        });
    } catch (error) {
        console.log("❌ ERROR IN USER CONTROLLER:", error);
        return internalServerResponse({
            response,
            message:error.message
        });
    }
};