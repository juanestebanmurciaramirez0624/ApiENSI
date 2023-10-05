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
exports.getAssigns = exports.newAssigns = void 0;
const assigns_1 = require("../models/assigns");
//Registro Assigns
const newAssigns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCourse, idSnack, allocatedAmount, assignedDate } = req.body;
    try {
        yield assigns_1.Assigns.create({
            idCourse: idCourse,
            idSnack: idSnack,
            allocatedAmount: allocatedAmount,
            assignedDate: assignedDate
        });
        res.json({
            msg: 'Asignacion registrada'
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
exports.newAssigns = newAssigns;
//Consulta Assigns
const getAssigns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAssigns = yield assigns_1.Assigns.findAll();
    res.json(listAssigns);
});
exports.getAssigns = getAssigns;
