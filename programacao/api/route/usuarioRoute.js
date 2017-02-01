/**
 * Created by Cleber Spirlandeli on 28/01/2017.
 */

const Usuario = require('./../../core/usuarioController');

module.exports = function (app) {
    app.route('/api/usuario')
        .get(Usuario.listarUsuarioCtrl)
        .post(Usuario.inserirUsuarioCtrl);

    app.route('/api/usuario/:id')
        .put(Usuario.atualizarUsuarioCtrl)
        .delete(Usuario.excluirUsuarioCtrl)
        .get(Usuario.listarUsuarioPorIdCtrl);
};
