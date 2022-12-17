const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Rutik Pipeline Completed Edited fot the 3rd time!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
