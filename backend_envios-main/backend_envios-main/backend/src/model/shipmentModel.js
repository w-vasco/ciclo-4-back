const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const shipmentSchema = new Schema(
  {
    numero_pedido: { type: Number, required: true },
    dir_recogida: { type: String, required: true },
    ciudad_recogida: { type: String, required: true },
    id_remitente: { type: String, required: true },
    nombre_remitente: { type: String, required: true },
    dir_receptor: { type: String, required: true },
    ciudad_receptor: { type: String, required: true },
    id_receptor: { type: String, required: true },
    nombre_receptor: { type: String, required: true },
    fecha_entrega: { type: String, required: true },
    estado: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("shipment", shipmentSchema);
