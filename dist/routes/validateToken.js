"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    //Validar si en la cabezaera esta el token
    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        try {
            //El token existe
            const bearerToekn = headerToken.slice(7);
            //Añade al token la SK
            jsonwebtoken_1.default.verify(bearerToekn, process.env.SECRET_KEY || 'pepito123');
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'Token no valido'
            });
        }
    }
    else {
        res.status(401).json({
            msg: 'Acceso Denegado'
        });
    }
    ;
};
exports.default = validateToken;
