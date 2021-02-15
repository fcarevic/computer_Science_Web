"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Students = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ime: {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    indeks: {
        type: String,
        required: true
    },
    tip: {
        type: String
    },
    status: {
        type: String,
        default: 'Aktivan'
    }
});
exports.default = mongoose_1.default.model('Studeents', Students, 'Students');
//# sourceMappingURL=Student.js.map