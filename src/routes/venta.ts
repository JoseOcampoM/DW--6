import { request, Response, Application } from "express";
import { VentaController } from "../controllers/venta.controllers";

export class VentaRoutes{
    public ventaController: VentaController = new VentaController();
    public routes(app: Application): void{
        app.route("/user").get(this.ventaController.getAllVenta)
        app.route("/user").get(this.ventaController.getOneVenta)
        app.route("/user").post(this.ventaController.createVenta)
        app.route("/user").patch(this.ventaController.updateVenta)
        app.route("/user").delete(this.ventaController.deleteVenta)
    }
}