const mongoose = require("mongoose");
try {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Conexion a la base de datos ... (ok)")
  );
} catch (e) {
  console.log(" Problemas con la conexion a la BD =>", e);
}
