import express, {Application} from 'express';
import routersProduct from '../routes/snacks';
import routersUser from '../routes/user';
import routersCourse from '../routes/course';
import routersAssigns from '../routes/assigns';
import cors from 'cors';
import { Snack } from './snack';
import { User } from './user';
import { Course } from './course';
import { Assigns } from './assigns';

class Server {
    //La aplicacion de express se alamcena es la variable app
    private app: Application;

    //Puerto de la aplicacion
    private port: string;

    constructor(){
        this.app = express();
        // Establece la propiedad "port" de la instancia actual (this) en el valor de la variable de entorno "PORT" si está definida,
        // de lo contrario, establece el puerto en '3001' como valor predeterminado.
        this.port = process.env.PORT || '3000'; 
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();
    };

    listen(){
    // Utilizar "listen" proporcionada por Express.js para iniciar el servidor.
    // Escucha en el puerto especificado y ejecuta una función de devolución de llamada cuando el servidor está listo. 
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriedo en el puerto ' + this.port)
        })
    };

    router(){
        this.app.use("/api/users", routersUser);
        this.app.use("/api/snacks", routersProduct);
        this.app.use("/api/courses", routersCourse);
        this.app.use("/api/assigns", routersAssigns);
    };

    midlewares(){
        //Parseo body
        this.app.use(express.json());
        //  Cors
        this.app.use(cors());
    };
    
    //Exportar table a bd
    async dbConnect(){
        try {
            await User.sync();
            await Snack.sync();
            await Course.sync();
            await Assigns.sync();
            console.log ("Conexion exitosa");
        } catch (error){
            console.log(error);
            console.log('Error al conenctar la al BD');            
        }
    }
};

//Una exportacion por defecto evita el uso de las {}
export default Server;