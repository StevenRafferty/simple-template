// Packages
const express = require('express');
const exphbs = require('express-handlebars');

// Init express
const app = express();

// Set view engine
app.use('handlebars', exphbs());
app.use('view engine', 'handlebars');

// Start server
app.listen(8080, () => console.log('Server started!!!'));
