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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSnack = exports.newSnack = void 0;
const snack_1 = require("../models/snack");
//Registro Snacks
const newSnack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, stock, typeSnack, state, idUser } = req.body;
    try {
        yield snack_1.Snack.create({
            description: description,
            stock: stock,
            typeSnack: typeSnack,
            state: state,
            idUser: idUser
        });
        res.json({
            msg: 'Refrigerio ' + description + ' registrado'
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
exports.newSnack = newSnack;
//Consulta Snacks
const getSnack = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listSnanck = yield snack_1.Snack.findAll();
    res.json(listSnanck);
});
exports.getSnack = getSnack;
