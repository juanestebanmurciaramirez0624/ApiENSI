import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res:Response, next: NextFunction) => {
    const headerToken = req.headers ['authorization']

    //Validar si en la cabezaera esta el token
    if(headerToken != undefined && headerToken.startsWith('Bearer ')){
        try {
        //El token existe
        const bearerToekn = headerToken.slice(7);
        //Añade al token la SK
        jwt.verify(bearerToekn,process.env.SECRET_KEY || 'pepito123')
        next(); 
        } catch (error) {
            res.status(401).json({
                msg: 'Token no valido'
            })
        }
    } else{
        res.status(401).json({
            msg: 'Acceso Denegado'
        })
    };
}

export default validateToken;