const mongoose = require('mongoose');

const administacaoSchema = new mongoose.Schema(
  {
    nome: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        enum: {
			values: ["Dono", "Empregado"]
		}
    }
},
{
    timestamps: false,
    versionKey: false
})

const administracao = mongoose.model('administracao', administacaoSchema);
module.exports = administracao