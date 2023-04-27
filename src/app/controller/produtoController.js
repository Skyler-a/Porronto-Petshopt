const produtoService = require('../service/produtoService');

class ProdutoController {
    async cadastrarProduto(req, res) {
        try {
            const result = await produtoService.cadastrarProduto(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}

module.exports = new ProdutoController();