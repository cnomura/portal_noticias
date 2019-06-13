function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('SELECT * FROM noticias', callback);
};

NoticiasDAO.prototype.getUltimasNoticias = function (quantidade, callback) {
    this._connection.query('SELECT * FROM noticias order by data_criacao desc limit ? ', quantidade, callback);
};

NoticiasDAO.prototype.getNoticia = function (noticia, callback) {
    this._connection.query('SELECT * FROM noticias WHERE id_noticia = ?', noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
};

module.exports = function () {
    return NoticiasDAO;
};