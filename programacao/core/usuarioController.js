/**
 * Created by Cleber Spirlandeli on 28/01/2017.
 */

const UsuarioRepository = require('./usuarioRepository');
const waterfall = require('async-waterfall');

module.exports = {
    listarUsuarioCtrl,
    inserirUsuarioCtrl,
    atualizarUsuarioCtrl,
    excluirUsuarioCtrl,
    listarUsuarioPorIdCtrl
};

function listarUsuarioCtrl(req, res) {
    UsuarioRepository.listarUsuarioRep(req, function (err, dados) {
        if (err) {
            res.status(err).json('Error listarUsuarioRep');
        }
        else {
            res.status(200).json(dados);
        }
    });
}

function inserirUsuarioCtrl(req, res) {
    UsuarioRepository.inserirUsuarioRep(req, function (err, dados) {
        if (err) {
            res.status(err).json('Error inserirUsuarioCtrl');
        }
        else {
            res.status(200).json(dados);
        }
    });
}

function atualizarUsuarioCtrl(req, res) {
    UsuarioRepository.atualizarUsuarioRep(req, function (err, dados) {
        if (err) {
            res.status(err).json('Error Atualizar');
        }
        else {
            res.status(200).json(dados);
        }
    });
}

function excluirUsuarioCtrl(req, res) {
    UsuarioRepository.excluirUsuarioRep(req, function (err, dados) {
        if (err) {
            res.status(err).json('Error Excluir');
        }
        else {
            res.status(200).json(dados);
        }
    });
}

function listarUsuarioPorIdCtrl(req, res) {
    UsuarioRepository.listarUsuarioPorIdRep(req, function (err, dados) {
        if (err) {
            res.status(err).json('Error Listar Por ID');
        }
        else {
            res.status(200).json(dados);
        }
    });
}