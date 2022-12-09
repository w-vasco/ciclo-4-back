const EnvioDetalles = ({ envio }) => {
  return (
    <header>
      <div className="envio-details"></div>
      <h4 className="h4">Número de Pedido : {envio.numero_pedido}</h4>
      <p>
        <strong> Nombre de quien envia : </strong> {envio.nombre_remitente}
        <br />
        <strong> Identificacion : </strong> {envio.id_remitente}
        <br />
        <strong> Direccion donde se recoge el paquete : </strong>{" "}
        {envio.dir_recogida}
        <br />
        <strong> Ciudad de envio : </strong> {envio.ciudad_recogida}
        <br />
        <strong> Nombre de quien recibe </strong> : {envio.nombre_receptor}
        <br />
        <strong> Identificacion : </strong> {envio.id_receptor}
        <br />
        <strong> Direccion de entrega : </strong> {envio.dir_receptor}
        <br />
        <strong> Ciudad de entrega : </strong> {envio.ciudad_receptor}
        <br />
        <strong> Fecha de entrega : </strong> {envio.fecha_entrega}
        <br />
        <strong> Estado : </strong> {envio.estado}
        <br />
      </p>
    </header>
  );
};

export default EnvioDetalles;
