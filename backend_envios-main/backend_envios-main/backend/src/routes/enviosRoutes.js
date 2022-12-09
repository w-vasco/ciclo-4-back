const express = require("express");

const router = express.Router();
const {
  crearEnvio,
  obtenerTodosEnvios,
  obtenerEnvioporId,
  actualizarEnvio,
} = require("../controllers/shipmentsControllers");
const checkAuth = require("../middleware/checkAuth");

// Crear un envio
router.post("/", checkAuth, crearEnvio);

// Obtener todos los envios
router.get("/", checkAuth, obtenerTodosEnvios);

//Obtener  envio por id
router.get("/:id", checkAuth, obtenerEnvioporId);

// Update
router.put("/:id", checkAuth, actualizarEnvio);

module.exports = router;
