"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const snacks_1 = __importDefault(require("../routes/snacks"));
const user_1 = __importDefault(require("../routes/user"));
const course_1 = __importDefault(require("../routes/course"));
const assigns_1 = __importDefault(require("../routes/assigns"));
const cors_1 = __importDefault(require("cors"));
const snack_1 = require("./snack");
const user_2 = require("./user");
const course_2 = require("./course");
const assigns_2 = require("./assigns");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // Establece la propiedad "port" de la instancia actual (this) en el valor de la variable de entorno "PORT" si está definida,
        // de lo contrario, establece el puerto en '3001' como valor predeterminado.
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();
    }
    ;
    listen() {
        // Utilizar "listen" proporcionada por Express.js para iniciar el servidor.
        // Escucha en el puerto especificado y ejecuta una función de devolución de llamada cuando el servidor está listo. 
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriedo en el puerto ' + this.port);
        });
    }
    ;
    router() {
        this.app.use("/api/users", user_1.default);
        this.app.use("/api/snacks", snacks_1.default);
        this.app.use("/api/courses", course_1.default);
        this.app.use("/api/assigns", assigns_1.default);
    }
    ;
    midlewares() {
        //Parseo body
        this.app.use(express_1.default.json());
        //  Cors
        this.app.use((0, cors_1.default)());
    }
    ;
    //Exportar table a bd
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_2.User.sync();
                yield snack_1.Snack.sync();
                yield course_2.Course.sync();
                yield assigns_2.Assigns.sync();
                console.log("Conexion exitosa");
            }
            catch (error) {
                console.log(error);
                console.log('Error al conenctar la al BD');
            }
        });
    }
}
;
//Una exportacion por defecto evita el uso de las {}
exports.default = Server;
