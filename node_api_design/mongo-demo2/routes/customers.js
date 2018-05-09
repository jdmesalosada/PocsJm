/*const { customer } = require('../models/customer');
Si importamos el modulo de esta manera,  para acceder a las dos propiedades
que en este caso son el customer y la funcion validate tocaria
usarlas así customer.Customer. y customer.validate. Un mejor enfoque es usar
destructuración de objetos: const {Customer, validate } = require('../models/customer');
*/
const { Customer, validate } = require("../models/customer");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  //ponemos la funcion asincrona
  const customers = await Customer.find().sort("name"); //Obtenemos todos los clientes de la bd y los ordenamos por el nombre
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold
  });
  customer = await customer.save();
  res.send(customer);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold
  });

  if (!customer)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(customer);
});

module.exports = router;
