import mongoose from 'mongoose'

const Schema = mongoose.Schema;


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
    years: [Number],
    code: String,
    fond: Number,
    epsb: Number,
    goal: String,
    outcome: String,
    lectureTerm: String,
    exerciseTerm: String,
    additional: String,
    professors: [String]
},
lectureMaterials: [String],
exerciseMaterials: [String],
exams:[{
    question : String,
    solution: String 
}],
lab: {
    info: String,
    numberOfExercises: Number,
    materials: [String]
},
project: {
    info:String,
    materials: [String]
},
syllabus:[{
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
}]




});

export default mongoose.model('Subjects', Subjects, 'Subjects');