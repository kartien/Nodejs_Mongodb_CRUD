
import { Schema, model, models, version } from "mongoose";

const taskSchemma =  new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false 
})

export default models('Task', taskSchemma)

