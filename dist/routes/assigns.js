"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assigns_1 = require("../controllers/assigns");
const validateToken_1 = __importDefault(require("./validateToken"));
const router = (0, express_1.Router)();
router.post('/register', validateToken_1.default, assigns_1.newAssigns);
router.get("/consultation", validateToken_1.default, assigns_1.getAssigns);
exports.default = router;
