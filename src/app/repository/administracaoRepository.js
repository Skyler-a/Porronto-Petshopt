const administracaoSchema = require('../schema/administracaoSchema')

class administracaoRepository {
    async cadastrarFuncionario(payload){
        return administracaoSchema.create(payload)
    }
    async findAdminById(id){
        return administracaoSchema.findById(id)
    }
}

module.exports = new administracaoRepository()