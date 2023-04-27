const petSchema = require('../schema/petSchema');

class PetRepository {
    async cadastrarPet(payload) {
        return petSchema.create(payload);
    }
    async listarPetsCadastradosPorUsuario(payload) {
        return petSchema.find({id_usuario: payload});
    }
}

module.exports = new PetRepository();