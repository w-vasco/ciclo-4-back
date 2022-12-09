# backend_envios
Este es una propuesta de backend para el reto del ciclo 4a.
# Importante:

En una base de datos relacional, configurar un campo para que incremente automáticamente 
cada vez que inserte un nuevo registro es una característica fácilmente 
disponible. Por otro lado, las bases de datos NoSQL como MongoDB permiten que las aplicaciones administren sus datos 
con mayor libertad y los servidores limitan los datos generados automáticamente. 
Todavía puede auto-incrementar fácilmente un campo en una base de datos NoSQL usando 
una colección de contadores en el campo _id. 

Por favor consulten la siguiente guia que explica como crear un trigger en Mongodb atlas para ello. Igual podria crear un trigger 
agendado para que cada hora se ejecute y cambien el estado a enviado a aquellos envios que ya tienen 24 horas. Estos triggers son 
codigo en JS en la BD


https://www.mongodb.com/basics/mongodb-auto-increment

Tambien se pueden implementar con instalando  mongoose-sequence 

https://www.npmjs.com/package/mongoose-sequence

