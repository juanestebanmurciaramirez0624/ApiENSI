"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configurar las variables de entorno
dotenv_1.default.config();
// Crea una nueva instancia de la clase "Server".
const server = new server_1.default();
/* Llama al método "listen" de la instancia "server" para iniciar el servidor web.
server.listen(); */ 
