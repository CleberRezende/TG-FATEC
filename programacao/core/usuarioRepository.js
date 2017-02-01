/**
 * Created by Cleber Spirlandeli on 28/01/2017.
 */

//const config = require('');

module.exports = {
    listarUsuarioRep,
    inserirUsuarioRep,
    atualizarUsuarioRep,
    excluirUsuarioRep,
    listarUsuarioPorIdRep
};

function listarUsuarioRep(req, callbackCtrl) {
    callbackCtrl(null, {dados: 'Listar OK'});
}

function inserirUsuarioRep(req, callbackCtrl) {
    callbackCtrl(null, {dados: 'Inserir OK'});
}

function atualizarUsuarioRep(req, callbackCtrl) {
    callbackCtrl(null, {dados: 'Atualizar OK'});
}

function excluirUsuarioRep(req, callbackCtrl) {
    callbackCtrl(null, {dados: 'Excluir OK'});
}

function listarUsuarioPorIdRep(req, callbackCtrl) {
    callbackCtrl(null, {dados: 'Listar Por ID OK'});
}