const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
  {
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    preco_promocional: {
        type: Number
    },
    em_promocao: {
        type: Boolean
    },
    imagem: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
})

const produto = mongoose.model('produto', produtoSchema);
module.exports = produto