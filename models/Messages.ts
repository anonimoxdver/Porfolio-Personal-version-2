import mongoose, { Schema, model, Model } from 'mongoose';


const MessageSchema = new Schema({

    name    : { type: String, required: true },
    email   : { type: String, required: true, unique: true },
    message : { type: String, required: true}, 
}, {
    timestamps: true,
})

const Message = mongoose.models.Message || model('Message', MessageSchema);

export default Message;