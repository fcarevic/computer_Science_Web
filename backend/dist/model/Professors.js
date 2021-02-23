"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Professors = new Schema({
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
    adresa: {
        type: String,
        required: true
    },
    mobilni: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
    podaci: {
        type: String,
        required: false
    },
    zvanje: {
        type: String,
        required: true
    },
    kabinet: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    predmeti: {
        type: [String],
        required: false
    },
    slika: {
        type: String
    },
    firstLogin: {
        type: Boolean,
        default: true
    }
});
exports.default = mongoose_1.default.model('Professors', Professors, 'Professors');
//# sourceMappingURL=Professors.js.map