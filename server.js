const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = process.env.PORT || 4000;
const baseUrl = `http://0.0.0.0:${port}`;

app.set('port', port);
app.set('view engine', 'html');
app.set('views', 'dist');
app.set('json spaces', 2);

app.use(bodyParser.json());

// Serve static files
app.use('/static', expressStaticGzip('dist/static'));

app.get('/**', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
