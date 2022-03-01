//This file has been changed

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send("Good job An! You made it");
});

app.listen(port, () => console.log(`The App is listening on port ${port}!`));
