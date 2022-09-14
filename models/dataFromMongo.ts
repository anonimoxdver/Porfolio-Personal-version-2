import mongoose, { Schema, model } from 'mongoose';


const DataSchema = new Schema({

    firstImage  : { type: String, required: true },
    secondImage : { type: String, required: true },
    pahtName    : { type: String, required: true}, 
    description : { type: String, required: true },
    title       : { type: String, required: true },
    github      : { type: String, required: true },
    link        : { type: String, required: true}, 
    background  : { type: String, required: false}, 

}, {
    timestamps: true,
})

DataSchema.index({ pahtNames: 'text', tags: 'text' });

const Data = mongoose.models.Proyect || model('Proyect', DataSchema);

export default Data;