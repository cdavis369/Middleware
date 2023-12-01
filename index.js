const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());


app.use('/items', routes);

app.listen(3000, () => { console.log("App on port 3000"); });