const express = require("express");
const cors = require("cors");
const requetesKnex = require("./Js/requetesKnex");

const PORT = process.env.PORT || 3000;
const app = expres();

app.use(cors());