const express = require('express');
const router = express.Router();


/**
 * @route GET api/auth
 * @route Get logged in user
 * @route Private
 */
router.get('/', (req, res) => {
    res.send('Get logged in  user');
});

/**
 * @route POST api/auth
 * @route Auth user & get token
 * @route Public
 */
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;