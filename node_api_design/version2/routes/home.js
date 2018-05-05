const express = require('express');
const router = express.Router()

//this function requires two paramters, the path
// and a callback that is going to be executed when the path is called.
router.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('index', {title: 'my express app', message: 'hello'})
  });


module.exports = router;