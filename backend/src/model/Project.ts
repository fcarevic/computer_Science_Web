import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let Project = new Schema({
    id: Number,
    title: String,
    typee:String,
    description: String,
    professors: [String]
})

export default mongoose.model('Projects', Project, 'Projects')