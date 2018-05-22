const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const users = require('../routes/users');
const rentals = require('../routes/rentals');
const movies = require('../routes/movies');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function ( app ) {
    app.use(express.json());
    app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/api/movies', movies);
    app.use('/api/rentals', rentals);
    app.use('/api/users', users);
    app.use('/api/auth', auth);

    //La funcion middleware de error tiene que ser definida, después de todas las funciones middleware
    app.use(error);
}