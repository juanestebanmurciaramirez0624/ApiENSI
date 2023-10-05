import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";


export const newUser = async (req: Request, res: Response) => {
    const { fullName, gender, typeDocument ,document, phone, email, address, role, username, password, state } = req.body;

    //Validar si el user ya existe
    const user = await User.findOne({
        where: { username: username }
    });
    if (user) {
        return res.status(400).json({
            msg: 'Ya existe el usuario ' + username
        })
    };

    //Encryptar la contraseña con el metodo hashd
    const hashdPassword = await bcrypt.hash(password, 10);

    //Guardar user en la BD
    try {
        await User.create({
            fullName: fullName,
            gender: gender,
            typeDocument: typeDocument, 
            document: document,
            phone: phone,
            email: email,
            address: address,
            role: role,
            username: username,
            password: hashdPassword,
            state: state
        });
        res.json({
            msg: 'Usuario ' + username + ' registrado'
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Opps Ocurrurio un error',
            error
        })
    };
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    //Valida si el user existe en la BD
    const user: any = await User.findOne({
        where: { username: username }
    });
    if (!user) {
        return res.status(400).json({
            msg: 'Usuario ' + username + ' no existente en la BD'
        })
    };

    //Valda si la password es valida o no
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password incorecto'
        })
    };

    
    //Generar token
    const token = jwt.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123',);
    res.json(token)
};

//Consulta Users
export const getUser = async (req: Request, res: Response) => {
    const listUser = await User.findAll();
    res.json(listUser);
};