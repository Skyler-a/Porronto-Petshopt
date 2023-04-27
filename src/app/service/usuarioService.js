const usuarioRepository = require('../repository/usuarioRepository');
const validarCpf = require('../utils/validateCpf');
const BadRequest = require('../errors/BadRequest');

class UsuarioService {
    async cadastrarUsuario(payload) {
        try {
            const validacaoDeCPf = await validarCpf(payload.cpf);
            if (validacaoDeCPf === false) throw new BadRequest('Cpf inválido');
            const result = await usuarioRepository.cadastrarUsuario(payload);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async findUsuario(payload) {
        try {
            const query = {
                nome: new RegExp(payload.nome),
                cpf: new RegExp(payload.cpf),
                email: new RegExp(payload.email),
            };
            const result = await usuarioRepository.findUsuario(query);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async findUsuarioById(id) {
        try {
            const result = await usuarioRepository.findUsuarioById(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UsuarioService();