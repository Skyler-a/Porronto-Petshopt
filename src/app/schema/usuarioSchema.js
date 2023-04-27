const mongoose = require('mongoose');
const bcript = require('bcryptjs');

const usuarioSchema = new mongoose.Schema(
  {
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    idade: {
        type: Number,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    pet: {
        type: Number,
        required: true
    }
},
{
    timestamps: false,
    versionKey: false
})

usuarioSchema.pre('save', async function senha(next) {
    const hash = await bcript.hash(this.senha, 10);
    this.senha = hash;
    next();
  });

const usuario = mongoose.model('usuario', usuarioSchema);
module.exports = usuario