const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 

const port = 3000;

//midleware

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server listening on ${port} and starting at http://localhost:${port}`)
});
