const UsuarioService = require('../service/usuarioService');

class UsuarioController {
    async cadastrarUsuario(req, res) {
        try{
            const result = await UsuarioService.cadastrarUsuario(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    async findUsuario(req, res) {
        try{
            const result = await UsuarioService.findUsuario(req.query);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(500).json(error);
        }
    }
    async findUsuarioById(req, res) {
        try{
            const result = await UsuarioService.findUsuarioById(req.params.id);
            return res.status(200).json(result);
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new UsuarioController();