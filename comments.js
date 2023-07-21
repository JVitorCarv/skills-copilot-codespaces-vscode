// Create web server
// Load the 'express' module
const express = require('express');

// Create a new instance of Express
const app = express();

// Create a new instance of Express Router
const router = express.Router();

// Load the 'comments' controller
const comments = require('../controllers/comments.server.controller');

// Mount the specified middleware function based on the path name
router.route('/').post(comments.create);

// Set the router as a route middleware
app.use('/api/comments', router);

// Configure the 'comments' module routes
module.exports = router;