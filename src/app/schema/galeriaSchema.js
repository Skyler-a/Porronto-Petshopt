const mongoose = require('mongoose');

const galeriaSchema = new mongoose.Schema(
  {
    imagem: {
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

const galeria = mongoose.model('galeria', galeriaSchema);
module.exports = galeria