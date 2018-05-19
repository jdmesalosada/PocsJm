const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //validamos si el usuario ya esta registrado.
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    /*user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    );*/


    user = new User(_.pick(req.body, ['name', 'email', 'password']) );
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //cuando llamamos este metodo pick obtenemos un nuevo objeto
    //con las propiedades elegidas del objeto pasado como argumento.
    res.send(_.pick(user, ['name', 'email']));
});

module.exports = router;