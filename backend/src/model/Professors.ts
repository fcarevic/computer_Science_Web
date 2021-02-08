import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Professors  = new Schema ({
        username: {
            type : String,
            required: true
        }, 
        password: {
            type : String,
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
            required:false
        },
        website: {
            type: String,
            required: false
        },
        podaci: {
            type:String,
            required:false
        },
        zvanje: {
            type:String,
            required:true
        }, 
        kabinet: {
            type:String,
            required:true
        },
        status: {
            type:String,
            required:true
        }, 
        predmeti: {
            type: [String],
            required: false
        },
        slika:{
            type: String
        }

});

export default mongoose.model('Professors', Professors, 'Professors');
