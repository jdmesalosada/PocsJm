const winston = require("winston"); //logger
require("winston-mongodb");
require("express-async-errors");

module.exports = function() {
  //event emitter.
  //Si tenemos una excepcion y esta no estra dentro de un bloque try catch
  //esta es atrapada por nuestro event emitter.
  //Esto solo funciona con codigo sincrono, es decir no funciona con promesas por ejemplo.
  /*process.on('uncaughtException', (ex) => {
  winston.error(ex.message, ex);
  process.exit(1);
});*/

  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughExceptions.log" })
  );

  /*process.on('unhandledRejection', (ex) => {
  winston.error(ex.message, ex);
  process.exit(1);
});*/

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(winston.transports.File, { filename: "logfile.log" });
  winston.add(winston.transports.MongoDB, { db: "mongodb://localhost/vidly" });

  //throw new Error('Something failed during startup');
};
