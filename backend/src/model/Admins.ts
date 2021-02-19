import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Admin = new Schema({
    username:String,
    password:String,
    ime:String,
    prezime:String

})

export default mongoose.model('Admins', Admin, 'Admins')