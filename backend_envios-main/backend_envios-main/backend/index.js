require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const shipmentsRoutes = require("./src/routes/enviosRoutes");
const authRoutes = require("./src/routes/authRoutes");

app = express();

// Middleware
app.use(express.json());
app.use(cors()); //Pendiente revisar creacion de whitelist o activar proxy en packetjson para no necesitar cors
app.use(cookieParser());

port = process.env.PORT || 3000;

//Routes
app.use("/auth", authRoutes);
app.use("/api/envios", shipmentsRoutes);

try {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    app.listen(port, process.env.HOSTNAME, () =>
      console.log(
        " Backend iniciado ... web server and conexion a la base de datos establecidas. "
      )
    )
  );
} catch (e) {
  console.log(" No es posible la conexion a la base de datos", e);
}
