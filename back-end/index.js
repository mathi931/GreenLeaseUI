const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server running on ${port}...`));