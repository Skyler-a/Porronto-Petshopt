const administracaoRepository = require('../repository/administracaoRepository')

class administracaoService {
    async cadastrarFuncionario(payload){
        try{
        const result = await administracaoRepository.cadastrarFuncionario(payload)
        return result
        } catch (error){
            throw error;
        }
    }
    async findAdminById(id){
        try {
            const result = await administracaoRepository.findAdminById(id)
            return result
        } catch (error){
            throw error;
        }
    }
}

module.exports = new administracaoService()