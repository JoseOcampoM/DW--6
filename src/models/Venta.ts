import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
    public fecha!: string;
    public valortotal!: string;
    public tipopago!: string;
}

export interface VentaI {
    fecha: string;
    valortotal: string;
    tipopago: string;
}

Venta.init(
    {
        fecha:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        valortotal:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        tipopago:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: true
    }
)