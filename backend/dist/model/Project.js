"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Project = new Schema({
    id: Number,
    title: String,
    typee: String,
    description: String,
    professors: [String]
});
exports.default = mongoose_1.default.model('Projects', Project, 'Projects');
//# sourceMappingURL=Project.js.map