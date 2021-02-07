import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('Notifications', Notifications, 'Notifications');