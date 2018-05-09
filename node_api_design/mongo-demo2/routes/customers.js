const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Joi = require('joi');

//1. Creamos el esquema y el modelo.
const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    isGold:{
      type: Boolean,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  })
);

router.get("/", async (req, res) => {
  //ponemos la funcion asincrona
  const customers = await Customer.find().sort("name"); //Obtenemos todos los clientes de la bd y los ordenamos por el nombre
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({ name: req.body.name });
  customer = await customer.save();
  res.send(customer);
});

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(customer, schema);
}

module.exports = router;