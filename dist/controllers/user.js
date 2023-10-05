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
exports.getUser = exports.login = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, gender, typeDocument, document, phone, email, address, role, username, password, state } = req.body;
    //Validar si el user ya existe
    const user = yield user_1.User.findOne({
        where: { username: username }
    });
    if (user) {
        return res.status(400).json({
            msg: 'Ya existe el usuario ' + username
        });
    }
    ;
    //Encryptar la contraseña con el metodo hashd
    const hashdPassword = yield bcrypt_1.default.hash(password, 10);
    //Guardar user en la BD
    try {
        yield user_1.User.create({
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
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Opps Ocurrurio un error',
            error
        });
    }
    ;
});
exports.newUser = newUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    //Valida si el user existe en la BD
    const user = yield user_1.User.findOne({
        where: { username: username }
    });
    if (!user) {
        return res.status(400).json({
            msg: 'Usuario ' + username + ' no existente en la BD'
        });
    }
    ;
    //Valda si la password es valida o no
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password incorecto'
        });
    }
    ;
    //Generar token
    const token = jsonwebtoken_1.default.sign({
        username: username
    }, process.env.SECRET_KEY || 'pepito123');
    res.json(token);
});
exports.login = login;
//Consulta Users
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUser = yield user_1.User.findAll();
    res.json(listUser);
});
exports.getUser = getUser;
