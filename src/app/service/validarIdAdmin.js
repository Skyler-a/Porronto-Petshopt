const administracaoRepository = require('../repository/administracaoRepository');

async function userIdValidate(id) {
    const result = await administracaoRepository.findAdminById(id);
    if(!result) throw new Error('Id do admin não existe.');
    return result;
}

module.exports = userIdValidate;