import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    mensaje: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
});

export const Message = mongoose.model('Message', messageSchema);