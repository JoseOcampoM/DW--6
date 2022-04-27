import { request, Response, Application } from "express";
import { UserController } from "../controllers/user.controllers";

export class UserRoutes{
    public userController: UserController = new UserController();
    public routes(app: Application): void{
        app.route("/user").get(this.userController.getAllUser)
        app.route("/user").get(this.userController.getOneUser)
        app.route("/user").post(this.userController.createUser)
        app.route("/user").patch(this.userController.updateUser)
        app.route("/user").delete(this.userController.deleteUser)
    }
}