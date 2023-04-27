const usuarioSchema = require('../schema/usuarioSchema');

class UsuarioRepository {
    async cadastrarUsuario(payload) {
        try {
            return usuarioSchema.create(payload);
        } catch (error) {
            throw error;
        }
    }
    async findUsuario(query) {
        return usuarioSchema.find(query);
    }
    async findUsuarioById(id) {
        return usuarioSchema.findById(id);
    }
}

module.exports = new UsuarioRepository();