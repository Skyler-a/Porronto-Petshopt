const petService = require('../service/petService');

class PetController {
    async cadastrarPet(req, res) {
        try {
            const result = await petService.cadastrarPet(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    async listarPetsCadastradosPorUsuario(req, res) {
        try {
            const result = await petService.listarPetsCadastradosPorUsuario(req.params.id_Usuario);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = new PetController();