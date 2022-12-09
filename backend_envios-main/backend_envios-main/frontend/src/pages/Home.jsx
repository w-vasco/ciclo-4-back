import { useEffect, useState } from "react";
import EnvioDetalles from "../components/envioDetalles";

const Home = () => {
  const [envios, setEnvios] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/envios")
      .then((res) => res.json())
      .then((res) => {
        setEnvios(res);
      });
  }, []);

  return (
    <div className="home">
      <div className="envios">
        {envios &&
          envios.map((envio) => (
            <EnvioDetalles key={envio._id} envio={envio} />
          ))}
      </div>
    </div>
  );
};

export default Home;
