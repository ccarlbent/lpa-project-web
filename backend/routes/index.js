const express = require('express');
const router = express.Router();

/*logic to redirect to Homepage using GET*/
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express'});
});

module.exports = router;