import { request, Response, Application } from "express";
import { VehiculoController } from "../controllers/vehiculo.controllers";

export class VehiculoRoutes{
    public vehiculoController: VehiculoController = new VehiculoController();
    public routes(app: Application): void{
        app.route("/vehiculos").get(this.vehiculoController.getAllVehiculo)
        // app.route("/vehiculos").get(this.vehiculoController.getOneVehiculo)
        // app.route("/vehiculos").post(this.vehiculoController.createVehiculo)
        // app.route("/vehiculos").patch(this.vehiculoController.updateVehiculo)
        // app.route("/vehiculos").delete(this.vehiculoController.deleteVehiculo)
    }
}