const produtoRepository = require('../repository/produtoRepository');
const validarIdAdmin = require('./validarIdAdmin')

class produtoService {
    async cadastrarProduto(payload) {
        try {
            await validarIdAdmin(payload.id_admin)
            const result = await produtoRepository.cadastrarProduto(payload);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async listarProduto(parametros){
        try {
            const query = {
                nome: new RegExp(parametros.nome),
                categoria: new RegExp(parametros.categoria)
            }
            const result = await produtoRepository.listarProduto(query)
            return result
        } catch (error) {
            throw error
        }
    }
    async listarProdutoPorId(id){
        try {
            const result = await produtoRepository.listarProdutoPorId(id)
            return result
        } catch (error) {
            throw error
        }
    }
    async criarPromocao(id_produto, payload){
        try {
            const result = await produtoRepository.criarPromocao(id_produto, payload)
        } catch (error) {
            throw error
        }
    }
}

module.exports = new produtoService();