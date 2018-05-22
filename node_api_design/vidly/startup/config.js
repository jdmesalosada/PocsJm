const config = require("config");

module.exports = function() {
  //Ejecutar para la creacion de la variable
  //para la generacion de la firma digital: export vidly_jwtPrivateKey=mySecureKey
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined");
    //El codigo 0 indica que algo fue satisfactorio.
    //Diferente de 0 que algo salio mal.
   // process.exit(1);
  }
};
