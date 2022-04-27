import { UserRoutes } from "./user";
import { VentaRoutes } from "./venta";

export class Routes{
    public userRoutes: UserRoutes = new UserRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
}