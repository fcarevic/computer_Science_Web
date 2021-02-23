import mongoose from 'mongoose'

const Schema = mongoose.Schema;
 let Students  = new Schema({
     username :{
         type: String,
         required: true
     },
     password : {
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

     indeks : {
         type: String,
         required: true
     }, 
     tip: {
         type: String
     }, 
     status: {
         type: String,
         default: 'Aktivan'
     },
     firstLogin: {
         type: Boolean,
         default:true
     }

 })

 export default mongoose.model('Studeents', Students, 'Students');