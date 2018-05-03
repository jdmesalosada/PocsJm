//Next es una referencia a la siguiente middleware function.
// en el pipeline de procesamiendo request.
// Si no ponemos el next la respuesta al usuario se va a colgar, ya que no estamos terminando el ciclo
//de procesamiento. por lo tanto es necesario pasarle la siguiente funcion middleware que se
//encarga de finalizar el ciclo de procesamiento request y response.
function log(req, res, next) {
    console.log('Logging...');
    console.log(req.body);
    next();
  };
  
module.exports = log;