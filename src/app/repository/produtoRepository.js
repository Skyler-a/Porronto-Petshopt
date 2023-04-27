const produtoSchema = require('../schema/produtoSchema');

class produtoRepository {
    async cadastrarProduto(payload) {
        return produtoSchema.create(payload);
    }
}

module.exports = new produtoRepository();