const mongoose = require("mongoose");
const Joi = require("joi");

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
    isGold: {
      type: Boolean,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(50)
      .required(),
    isGold: Joi.boolean().required(),
  };

  return Joi.validate(customer, schema);
}

//module.exports.Customer = Customer
exports.Customer = Customer;
exports.validate = validateCustomer; // el nombre al lado de exports es como vamos a poder consumir
//la función por fuera. En este caso sería validate.