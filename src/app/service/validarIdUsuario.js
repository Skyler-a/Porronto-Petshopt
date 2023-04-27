const usuarioRepository = require('../repository/usuarioRepository');

async function userIdValidate(id) {
    const result = await usuarioRepository.findUsuarioById(id);
    if(!result) throw new Error('Id de usuário não existe.');
    return result;
}

module.exports = userIdValidate;