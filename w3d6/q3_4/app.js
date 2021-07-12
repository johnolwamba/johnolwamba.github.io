const express = require("express");
const path = require("path");
const app = express();
const router = require("./routers/router");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended: false}));
app.use("/", router);

app.listen(3000);
