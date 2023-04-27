const administracaoService = require('../service/administracaoService')

class administracaoController {
    async cadastrarFuncionario(req, res){
        try {
            const result = await administracaoService.cadastrarFuncionario(req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async findAdminById(req, res){
        try {
            const result = await administracaoService.findAdminById(req.params.id)
            return res.status(200).json(result)
        } catch (error){
            return res.status(400).json(error)
        }
    }
}

module.exports = new administracaoController()