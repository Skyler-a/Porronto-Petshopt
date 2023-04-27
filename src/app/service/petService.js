const petRepository = require('../repository/petRepository');
const userIdValidate = require('./validarIdUsuario');

class PetService {
    async cadastrarPet(payload) {
        try {
            const { id_usuario } = payload;
            await userIdValidate(id_Usuario);
            const result = petRepository.cadastrarPet(payload);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async listarPetsCadastradosPorUsuario(id_Usuario) {
        try {
            await userIdValidate(id_Usuario);
            const result = petRepository.listarPetsCadastradosPorUsuario(id_Usuario);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PetService();