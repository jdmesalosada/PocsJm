const { Rental, validate } = require('../models/rental');
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Fawn = require('fawn');

Fawn.init(mongoose);

router.get('/', async (req, res) => {
    //Traemos las rentas ordenadas por fecha de salida de forma descendente por eso usamos el - antes
    // de la propiedad
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer');

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie');

    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock');



    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    });

    /*Aca podemos ver que tenemos dos operaciones de guardado separadas,
    pero puede pasar que cuando guardemos el rental satifactoriamente, y se intente
    guardar la pelicula, ocurra un error, por eso aca vamos a necesitar transactions.
    Con esto podemos asegurarnos que ambas operaciones seran ejecutadas y actualizaras los datos
    en la BD, o en caso de que una no funcione ninguna de las dos sea aplicada.
    En mongoose no se tiene este concepto pero existe una libreria que nos permite simular este concepto.
    */
    /*rental = await rental.save();

    movie.numberInStock--;
    movie.save();*/

    try {
        //Aca con fawn estamos ejecutando esta transaccion.
        new Fawn.Task()
            .save('rentals', rental)
            .update('movies', { _id: movie._id }, {
                $inc: { numberInStock: -1 }
            })
            .run();
        res.send(rental);
    }
    catch (ex) {
        res.status(500).send('Something failed');
    }

});

module.exports = router;