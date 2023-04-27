const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema(
  {
    cep: {
        type: String,
        required: true
    },
    valor_total: {
        type: Number,
        required: true
    },
    quatidade_de_itens: {
        type: Number,
        required: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    id_produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produto',
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
})

const pedidos = mongoose.model('pedidos', pedidosSchema);
module.exports = pedidos