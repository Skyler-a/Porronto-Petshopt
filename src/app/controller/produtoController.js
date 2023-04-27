const produtoService = require('../service/produtoService');

class ProdutoController {
    async cadastrarProduto(req, res) {
        try {
            const result = await produtoService.cadastrarProduto(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }
    async listarProduto(req, res) {
        try {
            const result = await produtoService.listarProduto(req.query)
            return res.status(200).json(result)
        } catch(error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
    async listarProdutoPorId(req, res) {
        try {
            const result = await produtoService.listarProdutoPorId(req.params.id)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    async criarPromocao(req, res){
        try {
            const result = await produtoService.criarPromocao(req.params.id, req.body)
            return res.status(200).json(result)
        } catch(error){
            return res.status(400).json(error)
        }
    }
}

module.exports = new ProdutoController();