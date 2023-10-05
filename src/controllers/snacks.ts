import { Request, Response } from "express"
import { Snack } from "../models/snack"

//Registro Snacks
export const newSnack = async (req: Request, res: Response) => {
    const {description, stock, typeSnack, state, idUser } = req.body;
    try {
        await Snack.create({
        description : description,
        stock: stock,
        typeSnack: typeSnack,
        state: state,
        idUser: idUser
    });
        res.json({
        msg: 'Refrigerio '+ description + ' registrado'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Opps Ocurrurio un error',
            error
        })
    };
};

//Consulta Snacks
export const getSnack = async (req: Request, res: Response) => {
    const listSnanck = await Snack.findAll();
    res.json(listSnanck);
};