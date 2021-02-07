import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let NotificationType = new Schema({
    name: {
        type:String
    }
});

export default mongoose.model('NotificationType', NotificationType, 'NotificationType');