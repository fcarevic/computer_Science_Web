"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Subjects = new Schema({
    notifications: [{
            title: String,
            description: String,
            date: {
                type: Date,
                default: new Date()
            }
        }],
    info: {
        typee: String,
        departments: [String],
        years: [Number],
        code: String,
        name: String,
        fond: Number,
        epsb: Number,
        goal: String,
        outcome: String,
        lectureTerm: String,
        exerciseTerm: String,
        additional: String,
        professors: [String],
        examsForbidden: {
            type: Boolean,
            default: false
        },
        labForbidden: {
            type: Boolean,
            default: false
        },
        projectForbidden: {
            type: Boolean,
            default: false
        },
    },
    lectureMaterials: [{
            filename: String,
            professor: String,
            fileSize: Number,
            date: {
                type: Date,
                default: new Date()
            }
        }],
    exerciseMaterials: [{
            filename: String,
            professor: String,
            fileSize: Number,
            date: {
                type: Date,
                default: new Date()
            }
        }],
    exams: {
        questions: [{
                filename: String,
                professor: String,
                fileSize: Number,
                date: {
                    type: Date,
                    default: new Date()
                }
            }],
        solutions: [{
                filename: String,
                professor: String,
                fileSize: Number,
                date: {
                    type: Date,
                    default: new Date()
                }
            }]
    },
    lab: {
        info: String,
        numberOfExercises: Number,
        materials: [{
                filename: String,
                professor: String,
                fileSize: Number,
                date: {
                    type: Date,
                    default: new Date()
                }
            }]
    },
    applicants: [String],
    project: {
        info: String,
        materials: [{
                filename: String,
                professor: String,
                fileSize: Number,
                date: {
                    type: Date,
                    default: new Date()
                }
            }]
    },
    syllabus: [{
            name: String,
            date: Date,
            expireDate: Date,
            place: String,
            limit: Number,
            active: {
                type: Boolean,
                default: true
            },
            students: [String]
        }],
    plan: [{
            professor: String,
            typee: String,
            number: Number
        }]
});
exports.default = mongoose_1.default.model('Subjects', Subjects, 'Subjects');
//# sourceMappingURL=Subject.js.map