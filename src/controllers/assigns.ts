import { Request, Response } from "express"
import { Assigns } from "../models/assigns"

//Registro Assigns
export const newAssigns = async (req: Request, res: Response) => {
    const {idCourse, idSnack, allocatedAmount, assignedDate} = req.body;
    try {
        await Assigns.create({
        idCourse : idCourse,
        idSnack: idSnack,
        allocatedAmount: allocatedAmount,
        assignedDate: assignedDate
    });
        res.json({
        msg: 'Asignacion registrada'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Opps Ocurrurio un error',
            error
        })
    };
};

//Consulta Assigns
export const getAssigns = async (req: Request, res: Response) => {
    const listAssigns = await Assigns.findAll();
    res.json(listAssigns);
};