const produtoRepository = require('../repository/produtoRepository')

async function criarNovaPromocao(id_produto, payload){
    const precoOriginal = await produtoRepository.listarProdutoPorId(id_produto)
}