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
exports.getCourse = exports.newCourse = void 0;
const course_1 = require("../models/course");
//Registro Course
const newCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { campus, name, numberStudents, director, state } = req.body;
    try {
        yield course_1.Course.create({
            campus: campus,
            name: name,
            numberStudents: numberStudents,
            director: director,
            state: state
        });
        res.json({
            msg: 'Curso ' + name + ' registrado'
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
exports.newCourse = newCourse;
//Consulta Course
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listCourse = yield course_1.Course.findAll();
    res.json(listCourse);
});
exports.getCourse = getCourse;
