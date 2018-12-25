prpl = require('prpl-server');
express = require('express');

const app = express();
app.get('/*', prpl.makeHandler('./build/default'));

app.listen(8080);