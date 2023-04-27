const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    raca: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
})

const pet = mongoose.model('pet', petSchema);
module.exports = pet