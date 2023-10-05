import Server from "./models/server";
import dotenv from "dotenv";

//Configurar las variables de entorno
dotenv.config();

// Crea una nueva instancia de la clase "Server".
const server = new Server();

/* Llama al método "listen" de la instancia "server" para iniciar el servidor web.
server.listen(); */