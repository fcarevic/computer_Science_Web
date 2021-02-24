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
    departments:[String],
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
    professors: [String]
},
lectureMaterials: [{
    filename:String,
    professor: String,
    fileSize: Number,
    date: {
        type:Date,
        default: new Date()
    }

}],
exerciseMaterials: [{
    filename:String,
    professor: String,
    fileSize: Number,
    date: {
        type:Date,
        default: new Date()
    }
}],
exams:{
    questions : [{
        filename:String,
        professor: String,
        fileSize: Number,
        date: {
            type:Date,
            default: new Date()
        }
    }],
    solutions: [{
        filename:String,
        professor: String,
        fileSize: Number,
        date: {
            type:Date,
            default: new Date()
        }
    }] 
},
lab: {
    info: String,
    numberOfExercises: Number,
    materials: [{
        filename:String,
    professor: String,
    fileSize: Number,
    date: {
        type:Date,
        default: new Date()
    }
    }]
},
applicants: [String]
,
project: {
    info:String,
    materials: [{
    filename:String,
    professor: String,
    fileSize: Number,
    date: {
        type:Date,
        default: new Date()
    }
    }]
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