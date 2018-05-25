const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging")(); //lo ponemos primero en caso de que se presente un error cargando los otros modulos.
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
