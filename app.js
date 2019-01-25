const express = require("express");
const bodyParser = require("body-parser");

const generator = require("./generator");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/qr-generator", generator);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Running at ${port}`));