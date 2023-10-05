import { Request, Response } from "express"
import { Course } from "../models/course"

//Registro Course
export const newCourse = async (req: Request, res: Response) => {
    const {campus, name, numberStudents, director, state } = req.body;
    try {
        await Course.create({
        campus : campus,
        name: name,
        numberStudents: numberStudents,
        director: director,
        state: state
    });
        res.json({
        msg: 'Curso '+ name + ' registrado'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Opps Ocurrurio un error',
            error
        })
    };
};

//Consulta Course
export const getCourse = async (req: Request, res: Response) => {
    const listCourse = await Course.findAll();
    res.json(listCourse);
};