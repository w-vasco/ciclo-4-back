const Envio = require("../model/shipmentModel");

const crearEnvio = async (req, res) => {
  try {
    await Envio(req.body).save();
    res.status(200).send("Envio creado");
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const obtenerTodosEnvios = async (req, res) => {
  try {
    const envios = await Envio.find();
    res.status(200).json(envios);
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const obtenerEnvioporId = async (req, res) => {
  try {
    const envio = await Envio.findById(req.params.id);
    res.json(envio);
  } catch (e) {
    restart.status(400).json({ message: e });
  }
};

const actualizarEnvio = async (req, res) => {
  try {
    await Envio.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send("Actualizacion exitosa");
  } catch (e) {
    restart.status(400).json({ message: e });
  }
};
module.exports = {
  crearEnvio,
  obtenerTodosEnvios,
  obtenerEnvioporId,
  actualizarEnvio,
};
