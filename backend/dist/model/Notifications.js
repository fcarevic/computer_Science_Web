"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Notifications = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    },
    type: {
        type: String,
        requred: true
    }
});
exports.default = mongoose_1.default.model('Notifications', Notifications, 'Notifications');
//# sourceMappingURL=Notifications.js.map