import { request, Response, Application } from "express";
import { UserController } from "../controllers/user.controllers";

export class UserRoutes{
    public userController: UserController = new UserController();
    public routes(app: Application): void{
        app.route("/users").get(this.userController.getAllUser)
        app.route("/users").get(this.userController.getOneUser)
        app.route("/users").post(this.userController.createUser)
        app.route("/users").patch(this.userController.updateUser)
        app.route("/users").delete(this.userController.deleteUser)
    }
}