const express = require('express');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const token = require('./modules/keyConfig');
// End of Module declarations

// Declare funcs.
const client = yelp.client(token);
const app = express();

// Port Number?
const PORT = 3000

// Express Middleware, 'use' public directory
app.use(express.static('public'));
// Parse POST data and store in req.body
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.listen(PORT, () => {
  console.log('Started listening on port ' + PORT);
});

// GET response for root
app.get('/', () => {
  console.log('GET request for / called...');
  response.render('pages/index')
});

app.get('/yelpsearch/:searchterm/:searchlocation', (request, response) => {
  var term = request.params.searchterm;
  var location = request.params.searchlocation;

  client.search({
    term: term,
    location: location,
  })
  .then(res => {
    return response.json(res.jsonBody);
  })
  .catch(err => {
    return err.json({ error })
  })
});


// POST response for /search
app.post('/search', (req, res) => {
  const { searchterm, location } = req.body;
  var yelps;
  client.search({
    term: searchterm,
    location: location,
  })
  .then(response => {
      return res.json(response.jsonBody);
      console.log(response.jsonBody);
  })
  .catch(e => {
      return e.json({ error })
});
});