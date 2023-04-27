const produtoRepository = require('../repository/produtoRepository');

class produtoService {
    async cadastrarProduto(payload) {
        try {
            const result = await produtoRepository.cadastrarProduto(payload);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new produtoService();