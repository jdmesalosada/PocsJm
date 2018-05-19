const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
const _ = require('lodash');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });

    //validamos si el usuario existe.
    if (!user) return res.status(400).send('Invalid user or password.');

    //El password que viene del usuario es plano, no tiene el salt.
    //Bcrypt se encarga de retornar el salt generado cuando se genero
    //el hash de la contraseña para poder realizar la comparación.
    //user.password, tiene el hash de la contraseña con el salt.
    //req.body.password es el texto plano de la constraseña que envía el usuario.
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid user or password.');

    const token = user.generateAuthToken();

    res.send(token);
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router;