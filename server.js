// Packages
const express = require('express');
// docs: https://handlebarsjs.com/
const exphbs = require('express-handlebars');

// Init express
const app = express();

// Init handlebars helper (https://www.npmjs.com/package/handlebars-helpers)
require('handlebars-helpers')();

// Set view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set assets
app.use('/assets', express.static('assets'));

const getUsers = async () => {
  return [
    {
      name: 'Steve',
      age: 22
    },
    {
      name: 'Ben',
      age: 24
    },
    {
      name: 'Jacob',
      age: 23
    }
  ];
} 

app.get('/', async (req, res) => {
  res.render('home', { users: await getUsers() });
});

// Start server
app.listen(8080, () => console.log('Server started!!!'));
