const produtoSchema = require('../schema/produtoSchema');

class produtoRepository {
    async cadastrarProduto(payload) {
        return produtoSchema.create(payload);
    }
    async listarProduto(query){
        return produtoSchema.find(query)
    }
    async listarProdutoPorId(id){
        return produtoSchema.findById(id)
    }
    async criarPromocao(id_produto, payload){
        return produtoSchema.findByIdAndUpdate(id_produto, payload)
    }
}

module.exports = new produtoRepository();