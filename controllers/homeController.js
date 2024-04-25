const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    // Render home page view
    res.render('home');
});

// Other routes and request handlers

module.exports = router;
