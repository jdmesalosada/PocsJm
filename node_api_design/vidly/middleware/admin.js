
//Asumimos que esta función va a ser ejecutad
//despues de haber autenticado el usuario
//por lo que el objeto user ya fue creado.
module.exports = function (req, res, next) {
    //401 Unathorized -> Se arroja cuando el usuario quiere acceder a un recurso
    //que esta protegido y no proveee un token valido pero le damos la oportunidad
    //de enviar un nuevo token valido.

    //403 Forbidden -> Cuando intenta nuevamente y no envia un token valido
    //ahi se provee el 403 que es como no intente nuevamente.
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');
    next();
}